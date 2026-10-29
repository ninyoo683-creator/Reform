import crypto from 'crypto';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface OrderRecord {
  orderId: string;
  productType: 'guide' | 'consultation';
  productTitle: string;
  amountInr: 499 | 999;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  focusAreas?: string[];
  notes?: string;
  paymentChannel: 'whatsapp' | 'razorpay';
  status: 'pending_whatsapp_confirmation' | 'payment_verified';
  createdAt: string;
}

const ordersStore = new Map<string, OrderRecord>();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // 1. Public configuration endpoint (never exposes secrets)
  app.get('/api/config', (_req, res) => {
    const razorpayConfigured = Boolean(
      process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
    );
    res.json({
      whatsappNumber: process.env.VITE_WHATSAPP_NUMBER || '919876543210',
      instagramUrl:
        process.env.VITE_INSTAGRAM_URL || 'https://instagram.com/reformbyfaheem',
      founderEmail: process.env.VITE_FOUNDER_EMAIL || 'mdfaheem618913@gmail.com',
      razorpayConfigured,
      razorpayKeyId: razorpayConfigured ? process.env.RAZORPAY_KEY_ID : null,
      prices: {
        guide: 499,
        consultation: 999,
      },
    });
  });

  // 2. Create an Order / Consultation Booking Request
  app.post('/api/orders', (req, res) => {
    const {
      productType,
      customerName,
      customerEmail,
      customerPhone,
      preferredDate,
      preferredTimeSlot,
      focusAreas,
      notes,
    } = req.body || {};

    if (productType !== 'guide' && productType !== 'consultation') {
      res.status(400).json({ error: 'Invalid product type selected.' });
      return;
    }

    const cleanName = String(customerName || '').trim();
    const cleanEmail = String(customerEmail || '').trim();
    const cleanPhone = String(customerPhone || '').trim();

    if (cleanName.length < 2) {
      res.status(400).json({ error: 'Please enter your full name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      res.status(400).json({ error: 'Please enter a valid email address.' });
      return;
    }

    const digitsOnly = cleanPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      res
        .status(400)
        .json({ error: 'Please enter a valid 10-digit WhatsApp phone number.' });
      return;
    }

    if (productType === 'consultation' && (!preferredDate || !preferredTimeSlot)) {
      res.status(400).json({
        error:
          'Please select your preferred consultation date and 30-minute time window.',
      });
      return;
    }

    const amountInr: 499 | 999 = productType === 'guide' ? 499 : 999;
    const productTitle =
      productType === 'guide'
        ? 'REFORM Facial Aesthetics Guide (Digital PDF)'
        : 'REFORM Personalized Facial Aesthetics Consultation (30-Min 1-to-1)';

    const randomSuffix = crypto.randomBytes(3).toString('hex').toUpperCase();
    const orderId = `REF-${productType === 'guide' ? 'G499' : 'C999'}-${randomSuffix}`;

    const record: OrderRecord = {
      orderId,
      productType,
      productTitle,
      amountInr,
      customerName: cleanName,
      customerEmail: cleanEmail,
      customerPhone: cleanPhone,
      preferredDate: preferredDate ? String(preferredDate) : undefined,
      preferredTimeSlot: preferredTimeSlot ? String(preferredTimeSlot) : undefined,
      focusAreas: Array.isArray(focusAreas) ? focusAreas.map(String) : undefined,
      notes: notes ? String(notes).trim() : undefined,
      paymentChannel: 'whatsapp',
      status: 'pending_whatsapp_confirmation',
      createdAt: new Date().toISOString(),
    };

    ordersStore.set(orderId, record);

    res.status(201).json({
      order: record,
      message:
        productType === 'guide'
          ? 'Order registered. Complete your ₹499 payment confirmation with Faheem on WhatsApp to receive your guide access passcode.'
          : 'Consultation request registered. Confirm your 30-minute slot and ₹999 payment with Faheem on WhatsApp.',
    });
  });

  // 3. Verify Guide Access Code or Razorpay Signature for Secure Guide Delivery
  app.post('/api/verify-access', (req, res) => {
    const { accessCode, orderId, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body || {};

    // Check Razorpay HMAC signature if provided and secret is configured
    if (
      razorpayPaymentId &&
      razorpayOrderId &&
      razorpaySignature &&
      process.env.RAZORPAY_KEY_SECRET
    ) {
      const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpayOrderId}|${razorpayPaymentId}`)
        .digest('hex');

      if (expectedSignature === razorpaySignature) {
        if (orderId && ordersStore.has(orderId)) {
          const existing = ordersStore.get(orderId)!;
          existing.status = 'payment_verified';
          ordersStore.set(orderId, existing);
        }
        res.json({
          verified: true,
          deliveryMethod: 'razorpay_verified',
          guideTitle: 'REFORM Facial Aesthetics Guide — Complete Digital Edition',
        });
        return;
      }
      res.status(400).json({ error: 'Payment signature verification failed.' });
      return;
    }

    // Check WhatsApp-issued access passcode
    const configuredPasscode = (
      process.env.GUIDE_ACCESS_PASSCODE || 'REFORM499'
    ).toUpperCase();
    const submittedCode = String(accessCode || '')
      .trim()
      .toUpperCase();

    if (!submittedCode) {
      res
        .status(400)
        .json({ error: 'Please enter the access code sent to you after payment.' });
      return;
    }

    if (submittedCode === configuredPasscode) {
      if (orderId && ordersStore.has(orderId)) {
        const existing = ordersStore.get(orderId)!;
        existing.status = 'payment_verified';
        ordersStore.set(orderId, existing);
      }
      res.json({
        verified: true,
        deliveryMethod: 'passcode_verified',
        guideTitle: 'REFORM Facial Aesthetics Guide — Complete Digital Edition',
      });
      return;
    }

    res.status(401).json({
      verified: false,
      error:
        'Invalid access code. Please complete your ₹499 payment via WhatsApp with Faheem to receive your verified download code.',
    });
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`REFORM server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
