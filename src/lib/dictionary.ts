/**
 * Arabic (UAE) to English (South Africa) dictionary for the site's /en
 * edition.
 *
 * The page's source language is Arabic: every component renders its copy
 * through t("<arabic>"), so the keys here are the Arabic source strings
 * exactly as they appear in the components. A missing key falls through to
 * the Arabic source (and warns in dev) rather than rendering an empty node —
 * scripts/check-dictionary.mjs sweeps the tree for unmapped strings.
 *
 * The two routes are two MARKETS: `/` sells the UAE, `/en` sells South
 * Africa. Most entries below are straight translations, but the handful that
 * name a country, a region or a language are market equivalents rather than
 * literal ones — the English of "في الامارات" is "in South Africa" here, by
 * design. Each is marked `market:` where it appears.
 */
export const EN_DICTIONARY: Record<string, string> = {
  // ── header / footer navigation ──────────────────────────────────────────
  "التصنيف": "Rankings",
  "من نحن": "About us",
  "تحذير المخاطر": "Risk warning",
  "قارن الآن": "Compare now",

  // ── last-updated band ───────────────────────────────────────────────────
  "آخر تحديث": "Last updated",
  "المعلومات الاستثمارية المقدمة في هذه الصفحة هي لأغراض تعليمية فقط.":
    "The investment information provided on this page is for educational purposes only.",

  // ── page title (three fragments; the middle one is gold) ────────────────
  "اختر": "Choose",
  "الوسيط الأفضل": "the best broker",
  // market: the UAE page sells the UAE, the English page sells South Africa.
  "في الامارات وابدأ التداول في دقائق!":
    "in South Africa and start trading in minutes!",

  // hero illustration alt text
  "ابحث عن الوسيط الأفضل": "Find the best broker",

  // ── country band ────────────────────────────────────────────────
  // market: flag + strip name the reader's own country, not the other one's.
  "افضل الوسطاء في الامارات": "Best brokers in South Africa",
  "الإمارات العربية المتحدة": "South Africa",

  // ── broker cards ────────────────────────────────────────────────────────
  // market:
  "الوسيط الأكثر شعبية في الإمارات":
    "The most popular broker in South Africa",
  "زيارة الموقع": "Visit site",
  "التداول يحمل مخاطر": "Trading involves risk",
  "كيف نحسب الدرجة": "How we calculate the score",

  // rating tooltip
  "درجة ميزان": "The Mizan score",
  "يعتمد تقييمنا على مؤشرات الأداء الرئيسية التالية:":
    "Our rating is based on the following key performance indicators:",
  "المكانة المرموقة": "Standing",
  "نقيس تفاعل المستخدمين من خلال مراقبة عدد النقرات التي تتلقاها كل علامة تجارية في آخر 7 أيام":
    "We measure user engagement by tracking how many clicks each brand receives over the last 7 days",
  "سمعة العلامة التجارية": "Brand reputation",
  "بناءً على التقييمات التي تم جمعها من أشهر المنصات الإلكترونية":
    "Based on reviews gathered from the best-known online platforms",
  "المزايا والفوائد": "Features and benefits",
  "يقوم فريق التحرير في ميزان بتقييم ومراجعة المنتجات المالية مع مراعاة أهم العناصر الوظيفية للمنتج.":
    "The Mizan editorial team assesses and reviews financial products with the most important functional elements of each product in mind.",

  // Evest bullets
  "مرخّص من CySEC قبرص و FSA سيشل":
    "Licensed by CySEC (Cyprus) and the FSA (Seychelles)",
  "حد أدنى منخفض للإيداع $50": "Low minimum deposit of $50",
  "فروقات سعرية تبدأ من 0.7 نقطة": "Spreads from 0.7 pips",
  "حساب إسلامي بدون فوائد (سواب-فري)":
    "Islamic swap-free account with no interest",
  // market: the Arabic bullet sells Arabic support; South Africa gets the
  // English equivalent.
  "دعم عربي على مدار الساعة": "English-language support around the clock",

  // Afaq bullets
  "حسابات إسلامية بدون فوائد ربوية": "Islamic accounts with no interest",
  "عروض ترحيبية مستمرة": "Ongoing welcome offers",
  "دعم مباشر محلي وحسابات تجريبية": "Local live support and demo accounts",
  // market:
  "تركيز على التعليم باللغة العربية": "A focus on education in English",

  // ── trust sidebar ───────────────────────────────────────────────────────
  "خبرتنا": "Our local",
  "المحلية في": "expertise",
  "الأسواق المالية": "in the financial markets",
  "يقدم لك خبراؤنا المحليون أفضل الخيارات المالية لمساعدتك في اتخاذ قرارات ذكية":
    "Our local experts bring you the best financial options to help you make smart decisions",
  "لماذا": "Why",
  "تستخدم ميزان؟": "use Mizan?",
  "أفضل الخيارات فقط": "Only the best options",
  "نقارن ونختار لك أفضل العروض": "We compare and pick the best offers for you",
  "وفر وقتك ومالك": "Save your time and money",
  "اعثر على الحل الأنسب لك في ثوانٍ معدودة":
    "Find the option that suits you in a matter of seconds",
  "بيانات محدثة دائمًا": "Always up-to-date data",
  "نتحقق من العروض والشروط باستمرار لنقدم لك معلومات موثوقة.":
    "We check offers and terms continuously so the information we give you is reliable.",
  "سهل وآمن": "Simple and safe",
  "فلاتر سهلة الاستخدام وتقييمات مفصلة لمساعدتك على اتخاذ القرار بثقة.":
    "Easy-to-use filters and detailed ratings to help you decide with confidence.",

  // ── article ─────────────────────────────────────────────────────────────
  "ما هو التداول عبر الإنترنت؟": "What is online trading?",
  "التداول عبر الإنترنت هو عملية شراء وبيع الأصول من خلال المنصات الإلكترونية، بهدف الاستفادة من تغيرات الأسعار في الأسواق العالمية.":
    "Online trading is the business of buying and selling assets through electronic platforms, with the aim of profiting from price movements in the global markets.",
  "يمكن للمتداولين الاستثمار في مجموعة متنوعة من الأسواق، بما في ذلك:":
    "Traders can invest across a wide range of markets, including:",
  "المعادن الثمينة: الذهب والفضة وغيرها من السلع القيمة.":
    "Precious metals: gold, silver and other valuable commodities.",
  "الموارد الطاقية: النفط والغاز الطبيعي وغيرها من السلع.":
    "Energy resources: oil, natural gas and other commodities.",
  "الأسهم: حصص في شركات عالمية رائدة مثل ابل امازون سامسونج.":
    "Shares: stakes in leading global companies such as Apple, Amazon and Samsung.",
  "تتيح هذه التنوعات للمتداولين الوصول إلى عدة أسواق، وتنويع محافظهم الاستثمارية، وتطبيق استراتيجيات مختلفة بناءً على ظروف السوق.":
    "That variety lets traders reach several markets at once, diversify their portfolios and apply different strategies depending on market conditions.",

  "ابدا التداول مع": "Start trading with",

  "فوائد التداول عبر الإنترنت": "The benefits of online trading",
  // market: the Arabic list ends on the Gulf, the English one on Africa.
  "الوصول إلى الأسواق العالمية: يمكنك التداول في مناطق مثل الولايات المتحدة وأوروبا وآسيا والخليج من خلال منصة واحدة.":
    "Access to global markets: trade in regions such as the United States, Europe, Asia and Africa from a single platform.",
  "تنوع الأسواق: من المعادن والسلع إلى أسهم الشركات الكبرى، يمكنك اختيار المجالات التي تناسب أهدافك.":
    "Market variety: from metals and commodities to the shares of major companies, you can pick the areas that fit your goals.",
  "المرونة والتحكم: التداول في أي وقت، مع القدرة على ضبط حجم المخاطرة لكل صفقة وفقًا لأهدافك.":
    "Flexibility and control: trade at any time, and set the size of the risk you take on each position to match your goals.",
  "أدوات تحليل متقدمة: استخدام الرسوم البيانية الحية والمؤشرات التقنية وبيانات السوق الفورية لاتخاذ قرارات مستنيرة.":
    "Advanced analysis tools: use live charts, technical indicators and real-time market data to make informed decisions.",
  "فرص التعلم: توفر العديد من المنصات موارد تعليمية وحسابات تجريبية لممارسة الاستراتيجيات دون مخاطر.":
    "Room to learn: many platforms provide educational resources and demo accounts so you can practise strategies without risk.",

  "اختيار وسيط التداول": "Choosing a trading broker",
  "جميع وسطاء التداول لدينا موثوقون ويمكنك اختيار أي منهم للبدء بسهولة في التداول. كل وسيط يوفر منصة تداول مستقرة وأدوات تحليل متقدمة لدعم قراراتك، مع مستويات أمان عالية وطرق دفع مرنة لتسهيل الإيداع والسحب. قبل البدء، يمكنك تجربة الحساب التجريبي لتتعرف على المنصة وتختبر استراتيجياتك بدون مخاطر، ومع دعم العملاء المتوفر دائمًا، ستتمكن من إدارة استثماراتك بثقة وراحة.":
    "Every trading broker we list is trustworthy, and you can pick any of them to start trading easily. Each one offers a stable trading platform and advanced analysis tools to support your decisions, along with high levels of security and flexible payment methods that make deposits and withdrawals straightforward. Before you begin, you can try a demo account to get to know the platform and test your strategies without risk — and with customer support always on hand, you will be able to manage your investments with confidence and ease.",

  // ── risk warning + footer ───────────────────────────────────────────────
  "تحذير من المخاطر": "Risk warning",
  "ينطوي الاستثمار على مخاطر عالية، بما في ذلك خطر خسارة بعض أو كل مبلغ استثمارك، وقد لا يكون مناسبًا لجميع المستثمرين.":
    "Investing carries a high level of risk, including the risk of losing some or all of the amount you invest, and may not be suitable for every investor.",
  "© 2026 ميزان — جميع الحقوق محفوظة.": "© 2026 Mizan — All rights reserved.",
  "هذا الموقع مورد مجاني مصمم لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت. قد يضم محتوى مدعوماً أو إعلانات، وقد نحصل على عمولة من الوسطاء المذكورين عند تفاعلك معهم.":
    "This site is a free resource built to help users make informed decisions online. It may carry sponsored content or advertising, and we may earn a commission from the brokers listed here when you engage with them.",
};
