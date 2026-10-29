export interface PresentationStage {
  id: '01' | '02' | '03';
  stepNumber: number;
  title: string;
  caption: string;
  image: string;
  summary: string;
  adjustments: string[];
}

export interface LearningTopic {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  whatYouWillLearn: string[];
  evidenceVsMyth: {
    established: string;
    mythToAvoid: string;
  };
  practicalProtocol: string[];
  safetyDisclaimer: string;
}

export interface MethodPrinciple {
  letter: string;
  word: string;
  phrase: string;
  detail: string;
}

export interface MythItem {
  myth: string;
  reality: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  column: 1 | 2;
}

export interface GuideChapter {
  number: string;
  title: string;
  subtitle: string;
  keyTakeaways: string[];
  protocolSummary: string;
  cautionNote: string;
}

export const BRAND_CONFIG = {
  brandName: 'REFORM',
  founder: 'Faheem',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
  instagramUrl:
    import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/reformbyfaheem',
  founderEmail: import.meta.env.VITE_FOUNDER_EMAIL || 'mdfaheem618913@gmail.com',
  guidePriceInr: 499,
  consultationPriceInr: 999,
};

export function buildWhatsAppUrl(
  message: string,
  phone = BRAND_CONFIG.whatsappNumber
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

export const PRESENTATION_STAGES: PresentationStage[] = [
  {
    id: '01',
    stepNumber: 0,
    title: 'UNDERSTAND',
    caption: 'Your natural features, as they are.',
    image: '/assets/reform/stage-01-understand.png',
    summary:
      'Understand your current routine, identify your main concerns, and decide which improvements matter most to you.',
    adjustments: [
      'Practical, structured self-improvement guidance',
      'Personalized routines based on your goals',
      'Realistic expectations without miracle promises',
    ],
  },
  {
    id: '02',
    stepNumber: 1,
    title: 'REFINE',
    caption: 'Grooming, skincare and styling choices.',
    image: '/assets/reform/stage-02-refine.png',
    summary:
      'Create a sustainable routine using suitable products, grooming techniques, and everyday habits.',
    adjustments: [
      'Consistent skincare routine supporting clearer, healthier-looking skin',
      'Flattering haircut and styling that complement your features',
      'Well-maintained eyebrows, facial grooming, and oral care',
    ],
  },
  {
    id: '03',
    stepNumber: 2,
    title: 'PRESENT',
    caption: 'A more refined and confident presentation.',
    image: '/assets/reform/stage-03-present.png',
    summary:
      'Your appearance isn’t one feature. It’s the result of how everything comes together.',
    adjustments: [
      'Measurable, sustainable progress over time',
      'Well-fitted clothing, color coordination, and personal hygiene',
      'A more polished, confident version of yourself',
    ],
  },
];

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 'skin-optimization',
    index: '01',
    title: 'Skin Optimization',
    subtitle: 'Build a consistent skincare routine that supports clearer, healthier-looking skin.',
    image: '/assets/reform/topic-01-skinmaxxing.png',
    summary:
      'Build a consistent skincare routine that supports clearer, healthier-looking skin. Learn how to understand your skin type, choose suitable products, manage common concerns, and maintain your skin barrier without overcomplicating your routine.',
    whatYouWillLearn: [
      'Focus areas: Cleansing, moisturizing, sunscreen, acne care, skin texture, and post-acne marks.',
      'Learn how to understand your skin type and choose suitable products',
      'Manage common concerns and maintain your skin barrier without overcomplicating your routine',
    ],
    evidenceVsMyth: {
      established:
        'Consistent, suitable products are often a better starting point.',
      mythToAvoid:
        'More skincare products mean better skin. Reality: An overly complicated routine can irritate your skin.',
    },
    practicalProtocol: [
      'Cleansing, moisturizing, and daily sunscreen fundamentals',
      'Targeted acne care, skin texture, and post-acne marks management',
      'Maintaining your skin barrier without overcomplicating your routine',
    ],
    safetyDisclaimer:
      'Educational content only. Individual results vary. The guide does not replace professional medical, dermatological, or dental care.',
  },
  {
    id: 'hair-optimization',
    index: '02',
    title: 'Hair Optimization',
    subtitle: 'Your hairstyle should complement your features, hair type, and personal style.',
    image: '/assets/reform/topic-02-hairmaxxing.png',
    summary:
      'Your hairstyle should complement your features, hair type, and personal style. Understand how to choose a flattering haircut, maintain healthy hair, style it effectively, and recognize when hair thinning needs professional attention.',
    whatYouWillLearn: [
      'Focus areas: Haircuts, styling, haircare, scalp health, and hair-loss awareness.',
      'Understand how to choose a flattering haircut that complements your features and hair type',
      'Maintain healthy hair, style it effectively, and recognize when hair thinning needs professional attention',
    ],
    evidenceVsMyth: {
      established:
        'Many improvements start with basic hygiene, a suitable haircut, consistent skincare, and clothes that fit properly.',
      mythToAvoid:
        'You need expensive products to look better. Recommendations should prioritize suitability, usefulness, and consistency rather than price or brand popularity.',
    },
    practicalProtocol: [
      'Selecting haircuts that complement your features, hair type, and personal style',
      'Effective everyday haircare, styling, and scalp health maintenance',
      'Hair-loss awareness and recognizing when hair thinning needs professional attention',
    ],
    safetyDisclaimer:
      'Educational content only. Individual results vary. Recognize when hair thinning needs professional medical or dermatological attention.',
  },
  {
    id: 'eye-brow-grooming',
    index: '03',
    title: 'Eye & Brow Grooming',
    subtitle: 'Small grooming details can influence your overall presentation.',
    image: '/assets/reform/topic-03-eyemaxxing.png',
    summary:
      'Small grooming details can influence your overall presentation. Learn how to maintain your eyebrows, groom the surrounding area safely, manage the appearance of under-eye puffiness, and create a more polished look.',
    whatYouWillLearn: [
      'Focus areas: Brow shape, grooming, under-eye skincare, sleep, and presentation.',
      'Learn how to maintain your eyebrows and groom the surrounding area safely',
      'Manage the appearance of under-eye puffiness and create a more polished look',
    ],
    evidenceVsMyth: {
      established:
        'Facial puffiness has multiple possible causes. Consistent sleep, safe under-eye skincare, and neat brow grooming create a more polished look.',
      mythToAvoid:
        'Supplements and quick fixes can eliminate facial puffiness. Reality: Dehydration, diuretics, laxatives, and other extreme methods can be harmful.',
    },
    practicalProtocol: [
      'Safe brow shape maintenance and grooming of the surrounding area',
      'Under-eye skincare and managing the appearance of under-eye puffiness',
      'Supporting presentation through consistent sleep and grooming habits',
    ],
    safetyDisclaimer:
      'Educational content only. Individual results vary. Avoid extreme or unsafe methods for facial or under-eye puffiness.',
  },
  {
    id: 'facial-aesthetics',
    index: '04',
    title: 'Facial Aesthetics',
    subtitle: 'Understand the relationship between facial proportions, grooming, posture, and overall presentation.',
    image: '/assets/reform/topic-04-structure.png',
    summary:
      'Understand the relationship between facial proportions, grooming, posture, and overall presentation. Learn which concerns can be addressed through everyday habits and which may require advice from a qualified dental or medical professional.',
    whatYouWillLearn: [
      'Focus areas: Facial harmony, profile awareness, posture, grooming, and realistic expectations.',
      'Understand the relationship between facial proportions, grooming, posture, and overall presentation',
      'Learn which concerns can be addressed through everyday habits and which may require advice from a qualified dental or medical professional',
    ],
    evidenceVsMyth: {
      established:
        'Facial appearance is influenced by genetics, age, anatomy, sleep, and other factors. Dental or jaw concerns should be assessed by qualified professionals.',
      mythToAvoid:
        'Mewing can dramatically reshape your adult jaw / Lower body fat always means a better-looking face. Reality: There is insufficient evidence that tongue posture exercises can reliably remodel an adult jawline, and extreme dieting is not a safe or reliable way to improve facial aesthetics.',
    },
    practicalProtocol: [
      'Developing facial harmony and profile awareness with realistic expectations',
      'Improving everyday posture and grooming habits within your control',
      'Consulting qualified dental or medical professionals when structural assessment is needed',
    ],
    safetyDisclaimer:
      'REFORM can explain general facial aesthetics and help you understand your options. It cannot guarantee structural changes. Dental, orthodontic, or surgical concerns require assessment by appropriately qualified professionals.',
  },
  {
    id: 'teeth-oral-care',
    index: '05',
    title: 'Teeth & Oral Care',
    subtitle: 'A confident smile begins with consistent oral hygiene.',
    image: '/assets/reform/topic-07-teeth.png',
    summary:
      'A confident smile begins with consistent oral hygiene. Build a routine that supports healthy teeth and gums while understanding the limits of whitening products and the importance of professional dental care.',
    whatYouWillLearn: [
      'Focus areas: Brushing, flossing, gum health, orthodontics, and safe whitening.',
      'Build a routine that supports healthy teeth and gums',
      'Understand the limits of whitening products and the importance of professional dental care',
    ],
    evidenceVsMyth: {
      established:
        'A confident smile begins with consistent oral hygiene: brushing, flossing, gum health, and professional dental care.',
      mythToAvoid:
        'Overusing harsh whitening products without understanding their limits or skipping professional dental assessment.',
    },
    practicalProtocol: [
      'Consistent daily brushing, flossing, and gum health maintenance',
      'Understanding safe whitening limits and protecting tooth enamel',
      'Seeking professional dental and orthodontic care when appropriate',
    ],
    safetyDisclaimer:
      'Educational content only. Individual results vary. The guide does not replace professional medical, dermatological, or dental care.',
  },
  {
    id: 'style-presentation',
    index: '06',
    title: 'Style & Presentation',
    subtitle: 'Looking put together is a skill you can develop.',
    image: '/assets/reform/topic-08-system.png',
    summary:
      'Looking put together is a skill you can develop. Learn how to select clothing that fits well, coordinate colors, maintain personal hygiene, and build a style that feels authentic to you.',
    whatYouWillLearn: [
      'Focus areas: Clothing fit, color coordination, fragrance, hygiene, and personal style.',
      'Learn how to select clothing that fits well and coordinate colors',
      'Maintain personal hygiene and build a style that feels authentic to you',
    ],
    evidenceVsMyth: {
      established:
        'Many improvements start with basic hygiene, a suitable haircut, consistent skincare, and clothes that fit properly.',
      mythToAvoid:
        'Your appearance must be perfect before you can feel confident. Reality: Self-improvement can support confidence, but your worth and relationships are not determined by a facial rating.',
    },
    practicalProtocol: [
      'Selecting clothing that fits well and coordinating colors effectively',
      'Maintaining daily personal hygiene and appropriate fragrance habits',
      'Building a personal style that feels authentic and polished',
    ],
    safetyDisclaimer:
      'Self-improvement can support confidence, but your worth and relationships are not determined by a facial rating.',
  },
];

export const REFORM_METHOD_PRINCIPLES: MethodPrinciple[] = [
  {
    letter: '01',
    word: 'Assess',
    phrase: 'your current routine.',
    detail:
      'Understand your current routine, identify your main concerns, and decide which improvements matter most to you.',
  },
  {
    letter: '02',
    word: 'Prioritize',
    phrase: 'practical changes.',
    detail:
      'Focus on the changes that are practical, appropriate, and most relevant to your goals.',
  },
  {
    letter: '03',
    word: 'Build',
    phrase: 'a sustainable routine.',
    detail:
      'Create a sustainable routine using suitable products, grooming techniques, and everyday habits.',
  },
  {
    letter: '04',
    word: 'Track',
    phrase: 'meaningful changes.',
    detail:
      'Monitor consistency and meaningful changes over time instead of judging your progress every day.',
  },
  {
    letter: '05',
    word: 'Refine',
    phrase: 'your approach.',
    detail:
      'Adjust your approach based on results, your experience, and professional advice when needed.',
  },
];

export const COMMON_MYTHS: MythItem[] = [
  {
    myth: 'Lower body fat always means a better-looking face.',
    reality:
      'Facial appearance is influenced by genetics, age, anatomy, sleep, and other factors. Extreme dieting is not a safe or reliable way to improve facial aesthetics.',
  },
  {
    myth: 'Mewing can dramatically reshape your adult jaw.',
    reality:
      'There is insufficient evidence that tongue posture exercises can reliably remodel an adult jawline. Dental or jaw concerns should be assessed by qualified professionals.',
  },
  {
    myth: 'More skincare products mean better skin.',
    reality:
      'An overly complicated routine can irritate your skin. Consistent, suitable products are often a better starting point.',
  },
  {
    myth: 'Supplements and quick fixes can eliminate facial puffiness.',
    reality:
      'Facial puffiness has multiple possible causes. Dehydration, diuretics, laxatives, and other extreme methods can be harmful.',
  },
  {
    myth: 'You need expensive products to look better.',
    reality:
      'Many improvements start with basic hygiene, a suitable haircut, consistent skincare, and clothes that fit properly.',
  },
  {
    myth: 'Your appearance must be perfect before you can feel confident.',
    reality:
      'Self-improvement can support confidence, but your worth and relationships are not determined by a facial rating.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'who-is-reform-for',
    question: 'Who is REFORM for?',
    answer:
      'REFORM is for men who want practical guidance on skincare, grooming, facial aesthetics, style, and personal development.',
    column: 1,
  },
  {
    id: 'do-i-need-experience',
    question: 'Do I need experience with skincare?',
    answer:
      'No. The framework is designed to help beginners understand the basics and develop a routine that suits their needs.',
    column: 1,
  },
  {
    id: 'how-quickly-results',
    question: 'How quickly will I see results?',
    answer:
      'Timelines vary by concern. Grooming and styling changes can be immediate, while improvements in acne, skin texture, and hair-related concerns may take weeks or months. Some anatomical features cannot be changed through routine adjustments.',
    column: 1,
  },
  {
    id: 'expensive-products',
    question: 'Do I need expensive products?',
    answer:
      'No. Recommendations should prioritize suitability, usefulness, and consistency rather than price or brand popularity.',
    column: 1,
  },
  {
    id: 'fix-jawline',
    question: 'Can REFORM fix my jawline or facial structure?',
    answer:
      'REFORM can explain general facial aesthetics and help you understand your options. It cannot guarantee structural changes. Dental, orthodontic, or surgical concerns require assessment by appropriately qualified professionals.',
    column: 2,
  },
  {
    id: 'after-1-to-1-call',
    question: 'What happens after a 1-to-1 call?',
    answer:
      'You receive personalized post-call recommendations and a prioritized action plan based on the concerns discussed.',
    column: 2,
  },
  {
    id: 'is-medical-service',
    question: 'Is REFORM a medical service?',
    answer:
      'No. REFORM provides educational self-improvement and grooming guidance, not medical diagnosis or treatment.',
    column: 2,
  },
];

export const CONSULTATION_TIME_SLOTS = [
  '11:00 AM – 11:30 AM IST',
  '02:00 PM – 02:30 PM IST',
  '05:00 PM – 05:30 PM IST',
  '07:30 PM – 08:00 PM IST',
  '09:00 PM – 09:30 PM IST',
];

export const CONSULTATION_FOCUS_OPTIONS = [
  '01 — Skin Optimization',
  '02 — Hair Optimization',
  '03 — Eye & Brow Grooming',
  '04 — Facial Aesthetics',
  '05 — Teeth & Oral Care',
  '06 — Style & Presentation',
];

export const DIGITAL_GUIDE_CHAPTERS: GuideChapter[] = [
  {
    number: '01 — Skin Optimization',
    title: 'Build a consistent skincare routine that supports clearer, healthier-looking skin.',
    subtitle: 'Focus areas: Cleansing, moisturizing, sunscreen, acne care, skin texture, and post-acne marks.',
    keyTakeaways: [
      'Learn how to understand your skin type and choose suitable products.',
      'Manage common concerns and maintain your skin barrier without overcomplicating your routine.',
      'An overly complicated routine can irritate your skin; consistent, suitable products are often a better starting point.',
    ],
    protocolSummary:
      'Focus areas: Cleansing, moisturizing, sunscreen, acne care, skin texture, and post-acne marks.',
    cautionNote:
      'Educational content only. Individual results vary. The guide does not replace professional medical, dermatological, or dental care.',
  },
  {
    number: '02 — Hair Optimization',
    title: 'Your hairstyle should complement your features, hair type, and personal style.',
    subtitle: 'Focus areas: Haircuts, styling, haircare, scalp health, and hair-loss awareness.',
    keyTakeaways: [
      'Understand how to choose a flattering haircut and maintain healthy hair.',
      'Style your hair effectively for your features, hair type, and personal style.',
      'Recognize when hair thinning needs professional attention.',
    ],
    protocolSummary:
      'Focus areas: Haircuts, styling, haircare, scalp health, and hair-loss awareness.',
    cautionNote:
      'Educational content only. Individual results vary. The guide does not replace professional medical, dermatological, or dental care.',
  },
  {
    number: '03 — Eye & Brow Grooming',
    title: 'Small grooming details can influence your overall presentation.',
    subtitle: 'Focus areas: Brow shape, grooming, under-eye skincare, sleep, and presentation.',
    keyTakeaways: [
      'Learn how to maintain your eyebrows and groom the surrounding area safely.',
      'Manage the appearance of under-eye puffiness and create a more polished look.',
      'Facial puffiness has multiple possible causes; dehydration, diuretics, laxatives, and other extreme methods can be harmful.',
    ],
    protocolSummary:
      'Focus areas: Brow shape, grooming, under-eye skincare, sleep, and presentation.',
    cautionNote:
      'Educational content only. Individual results vary. The guide does not replace professional medical, dermatological, or dental care.',
  },
  {
    number: '04 — Facial Aesthetics',
    title: 'Understand the relationship between facial proportions, grooming, posture, and overall presentation.',
    subtitle: 'Focus areas: Facial harmony, profile awareness, posture, grooming, and realistic expectations.',
    keyTakeaways: [
      'Learn which concerns can be addressed through everyday habits and which may require advice from a qualified dental or medical professional.',
      'Facial appearance is influenced by genetics, age, anatomy, sleep, and other factors.',
      'There is insufficient evidence that tongue posture exercises can reliably remodel an adult jawline.',
    ],
    protocolSummary:
      'Focus areas: Facial harmony, profile awareness, posture, grooming, and realistic expectations.',
    cautionNote:
      'Dental, orthodontic, or surgical concerns require assessment by appropriately qualified professionals.',
  },
  {
    number: '05 — Teeth & Oral Care',
    title: 'A confident smile begins with consistent oral hygiene.',
    subtitle: 'Focus areas: Brushing, flossing, gum health, orthodontics, and safe whitening.',
    keyTakeaways: [
      'Build a routine that supports healthy teeth and gums.',
      'Understand the limits of whitening products and the importance of professional dental care.',
    ],
    protocolSummary:
      'Focus areas: Brushing, flossing, gum health, orthodontics, and safe whitening.',
    cautionNote:
      'Educational content only. Individual results vary. The guide does not replace professional medical, dermatological, or dental care.',
  },
  {
    number: '06 — Style & Presentation',
    title: 'Looking put together is a skill you can develop.',
    subtitle: 'Focus areas: Clothing fit, color coordination, fragrance, hygiene, and personal style.',
    keyTakeaways: [
      'Learn how to select clothing that fits well, coordinate colors, and maintain personal hygiene.',
      'Build a style that feels authentic to you.',
      'Many improvements start with basic hygiene, a suitable haircut, consistent skincare, and clothes that fit properly.',
    ],
    protocolSummary:
      'Focus areas: Clothing fit, color coordination, fragrance, hygiene, and personal style.',
    cautionNote:
      'Self-improvement can support confidence, but your worth and relationships are not determined by a facial rating.',
  },
];
