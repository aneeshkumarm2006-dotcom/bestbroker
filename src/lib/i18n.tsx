"use client";

import * as React from "react";

export type Lang = "ar" | "en";

/**
 * Arabic → English dictionary. The site authors every visible string in
 * Arabic; `t()` returns the English equivalent when the active language is
 * "en", and the original Arabic otherwise. Because broker data (rank labels,
 * feature bullets, flag captions) repeats verbatim across many routes, keying
 * the map by the Arabic source string deduplicates the translations for free.
 */
const AR_TO_EN: Record<string, string> = {
  // ── Header ──────────────────────────────────────────────────────────
  "قارن بين الوسطاء": "Compare Brokers",
  "المزيد من البلدان": "More countries",
  "انضم الينا كشريك": "Join us as a partner",

  // ── Home hero ───────────────────────────────────────────────────────
  "مقارنة مستقلة ومحايدة": "Independent and unbiased comparison",
  "ابحث عن": "Find",
  "الوسيط الأفضل": "the best broker",
  " لك!": " for you!",
  "سوف نساعدك في العثور على الوسيط الأنسب لاحتياجاتك! افهم الاختلافات بين أفضل الوسطاء في كل بلد.":
    "We'll help you find the broker best suited to your needs! Understand the differences between the best brokers in each country.",
  "اختر البلد لتجد الوسيط الأفضل لك":
    "Choose a country to find the best broker for you",
  "اختر البلد": "Choose a country",
  "اذهب": "Go",

  // ── Home about ──────────────────────────────────────────────────────
  "من نحن؟": "Who are we?",
  "ناشر مستقل وجدير بالثقة": "An independent and trustworthy publisher",
  "نحن ملتزمون بتوفير معلومات محايدة وغير متحيزة لمستخدمينا. يقوم فريق الخبراء لدينا بمراجعة وتحليل الوسطاء والسوق بشكل مستمر، ولا يتأثر تحليلهم بأي مؤسسات مالية أو شركات وساطة.":
    "We are committed to providing neutral, unbiased information to our users. Our team of experts continuously reviews and analyzes brokers and the market, and their analysis is not influenced by any financial institution or brokerage firm.",
  "نقارن أفضل الوسطاء في العالم": "We compare the world's best brokers",
  "يمكن لمستخدمي ميزان Mizan العثور على تحليلات وتقييمات للعلامات التجارية العالمية مثل eToro وCapital.com وPlus500، وكذلك الوسطاء الأكثر تخصصًا والأكثر تميزًا في هذا المجال":
    "Mizan users can find analyses and ratings of global brands such as eToro, Capital.com and Plus500, as well as the more specialized and distinguished brokers in the field.",
  "نوفر خدماتنا في أكثر من 50 دولة":
    "We offer our services in more than 50 countries",
  "بغض النظر عن مكان تواجد مستخدمينا، يهدف ميزان Mizan إلى تقديم خدمة شاملة من خلال تغطية أكثر من 50 دولة ما بين أوروبا وآسيا وأمريكا وأفريقيا.":
    "No matter where our users are, Mizan aims to provide a comprehensive service by covering more than 50 countries across Europe, Asia, America and Africa.",
  "مع أكثر من مليون مستخدم": "With more than a million users",
  "مستخدمونا هم أقوى دليل على جودتنا: في عام 2022، زار موقع ميزان Mizan أكثر من مليون مستخدم لاتخاذ قرارات مستنيرة عند اختيار الوسيط الانسب لهم.":
    "Our users are the strongest proof of our quality: in 2022, more than a million users visited the Mizan website to make informed decisions when choosing the broker best suited to them.",

  // ── Disclaimer band ─────────────────────────────────────────────────
  "تحذير من المخاطر:": "Risk warning:",
  "ينطوي الاستثمار على مخاطر عالية، بما في ذلك خطر خسارة بعض أو كل مبلغ استثمارك، وقد لا يكون مناسبًا لجميع المستثمرين.":
    "Investing involves high risk, including the risk of losing some or all of your invested amount, and may not be suitable for all investors.",
  "يجب أن تتأكد انه بإمكانك تحمل المخاطرة العالية التي قد تؤدي إلى خسارة أموالك. قبل اتخاذ قرار بالتداول، يجب أن تكون على علم تام بالمخاطر والتكاليف المرتبطة بالاستثمار في الأسواق المالية. البيانات الواردة في هذا الموقع ليست بالضرورة ظاهرة في الوقت الحقيقي او دقيقة. لن يتحمل ميزان Mizan أو أي مزود للبيانات الواردة في هذا الموقع المسؤولية عن أي خسارة أو ضرر نتيجة لاستثمارك، أو اعتمادك على المعلومات الواردة في هذا الموقع.":
    "You must make sure that you can bear the high risk that may lead to losing your money. Before deciding to trade, you should be fully aware of the risks and costs associated with investing in the financial markets. The data on this website is not necessarily real-time or accurate. Neither Mizan nor any provider of the data on this website will be liable for any loss or damage resulting from your investment, or your reliance on the information on this website.",
  "قد يتم تعويض ميزان Mizan من قبل المعلنين الذين يظهرون على الموقع، بناءً على تفاعلك مع الإعلانات أو المعلنين.":
    "Mizan may be compensated by the advertisers that appear on the site, based on your interaction with the ads or advertisers.",

  // ── Footer ──────────────────────────────────────────────────────────
  "سياسة الخصوصية": "Privacy Policy",
  "سياسة ملفات تعريف الارتباط": "Cookie Policy",
  " حقوق الطبع والنشر © 2026": " Copyright © 2026",
  "Aeternum Tech srl. جميع الحقوق محفوظة.":
    "Aeternum Tech srl. All rights reserved.",
  "تم تصميم هذا الموقع لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت، وهو يضم معلومات حول مجموعة واسعة من المنتجات والخدمات. يتم توفير بعض التفاصيل، بما في ذلك على سبيل المثال لا الحصر الأسعار والعروض الترويجية، من قبل شركائنا وهي ديناميكية وقادرة على التغيير في أي لحظة دون إشعار مسبق. على الرغم من أن المحتوى الخاص بنا يعتمد على بحث شامل، فلا ينبغي اعتباره نصيحة قانونية أو مهنية أو تنبؤًا، ولا ينبغي الاعتماد عليه على هذا النحو. لا تشكل قوائم الشركات على هذا الموقع تأييدًا. نحن لسنا مستشارين استثماريين أو سماسرة، ولا نقدم أي منتجات أو خدمات مباشرة للمستخدمين النهائيين، بل نسهل الاتصالات بين المستخدمين ومنصات شركائنا. يُحظر تمامًا إعادة الإنتاج غير المصرح به، كليًا أو جزئيًا.":
    "This website is designed to help users make informed decisions online, and it features information about a wide range of products and services. Some details, including but not limited to prices and promotions, are provided by our partners and are dynamic and subject to change at any moment without prior notice. Although our content is based on thorough research, it should not be considered legal or professional advice or a forecast, and should not be relied upon as such. The listing of companies on this website does not constitute an endorsement. We are not investment advisors or brokers, and we do not provide any products or services directly to end users; rather, we facilitate connections between users and our partners' platforms. Unauthorized reproduction, in whole or in part, is strictly prohibited.",
  "إفصاح إعلاني": "Advertising Disclosure",
  "هذا الموقع هو مورد مجاني عبر الإنترنت يسعى جاهدًا لتقديم محتوى مفيد وميزات مقارنة لزوارنا. نحن نقبل تعويضات إعلانية من الشركات التي تظهر على الموقع، مما قد يؤثر على الموقع والترتيب الذي يتم به تقديم العلامات التجارية (و/أو منتجاتها)، وقد يؤثر أيضًا على النتيجة المخصصة لها. لا تعني قوائم الشركات على هذه الصفحة التأييد. لا نعرض جميع مقدمي الخدمة في السوق. باستثناء ما هو منصوص عليه صراحةً في شروط الاستخدام الخاصة بنا، فإن جميع التصريحات والضمانات المتعلقة بالمعلومات المقدمة على هذه الصفحة غير مسؤولة.":
    "This website is a free online resource that strives to offer helpful content and comparison features to our visitors. We accept advertising compensation from the companies that appear on the site, which may affect the location and order in which brands (and/or their products) are presented, and may also affect the score assigned to them. The listing of companies on this page does not imply endorsement. We do not feature every service provider in the market. Except as expressly set forth in our Terms of Use, all warranties and representations regarding the information presented on this page are disclaimed.",
  "المعلومات، بما في ذلك الأسعار، التي تظهر على هذا الموقع قد تخضع للتغيير في أي وقت":
    "The information, including prices, that appears on this website may be subject to change at any time",

  // ── Nations grid ────────────────────────────────────────────────────
  "جميع ": "All ",
  "البلدان": "Countries",

  // ── Partner hero / form ─────────────────────────────────────────────
  "انضم إلى شبكة ": "Join the ",
  "التي تضم أفضل الوسطاء في مجال الوساطة المالية في العالم.":
    " network, which brings together the best brokers in the financial brokerage field in the world.",
  "كيف نخلق قيمة لشركائنا:": "How we create value for our partners:",
  "نشبك الوسطاء والمستخدمين من خلال تقنية ":
    "We connect brokers and users through ",
  "الذكاء الاصطناعي": "artificial intelligence",
  "نعزز ثقة المستخدم من خلال توفير مصدر ":
    "We boost user trust by providing a ",
  "موثوق ومستقل": "trusted and independent",
  " للمعلومات": " source of information",
  "نوفر ": "We provide ",
  "فرص استثمارية": "investment opportunities",
  " اكبر لشركائنا": " — bigger ones for our partners",
  "الاسم الكامل": "Full name",
  "البريد الإلكتروني": "Email",
  "رقم التليفون": "Phone number",
  "موقع الشركة": "Company website",
  "لننمو معاً": "Let's grow together",
  "القائمة": "Menu",

  // ── Broker detail hero (redesigned) ─────────────────────────────────
  "قائمة مُحدّثة بأفضل الوسطاء المرخّصين، مع مقارنة مستقلة تساعدك على اختيار الأنسب لك.":
    "An updated list of the best licensed brokers, with an independent comparison to help you choose the one best suited to you.",
  "وسطاء مرخّصون": "Licensed brokers",
  "مراجعات مستقلة": "Independent reviews",
  "محدّث 2026": "Updated 2026",

  // ── Broker list (UI chrome) ─────────────────────────────────────────
  "ابدأ التداول بثقة مع أفضل الوسطاء في السوق":
    "Start trading with confidence with the best brokers in the market",
  "زيارة الموقع": "Visit site",
  "التداول يحمل مخاطر": "Trading carries risk",
  "⭐ الأفضل": "⭐ Best",

  // ── Broker rank labels ──────────────────────────────────────────────
  "المركز الأول": "1st Place",
  "المركز الثاني": "2nd Place",
  "المركز الثالث": "3rd Place",
  "المركز الرابع": "4th Place",

  // ── Broker features ─────────────────────────────────────────────────
  "ترخيص FSC": "FSC License",
  "شفافية ومصداقية %100": "100% transparency and credibility",
  "حسابات ذكاء اصطناعي AI اسلامية": "Islamic AI accounts",
  "تضمين التداول الآلي": "Automated trading included",
  "ترخيص FSCA": "FSCA License",
  "تداول النسخ": "Copy trading",
  "حسابات إسلامية": "Islamic accounts",
  "ترخيص FCA/CYSEC/ASIC/CMA/SCB": "FCA/CYSEC/ASIC/CMA/SCB License",
  "0% عمولات (تُطبّق رسوم أخرى)": "0% commissions (other fees apply)",
  "تحديد مرن لحجم المركز": "Flexible position sizing",
  "رافعة مالية مخصصة": "Custom leverage",
  "ترخيص CYSEC/FSCA/FSA/ADGM": "CYSEC/FSCA/FSA/ADGM License",
  "نسخ التداول أصبح سهلاً بناءً على فئة الأصول":
    "Copy trading made easy by asset class",
  "مدرجة علنًا في بورصة فرانكفورت":
    "Publicly listed on the Frankfurt Stock Exchange",
  "حسابات إسلامية بدون فوائد ربوية":
    "Islamic accounts with no usurious interest",
  "عروض ترحيبية مستمرة": "Ongoing welcome offers",
  "دعم مباشر محلي وحسابات تجريبية": "Local live support and demo accounts",
  "تركيز على التعليم باللغة العربية": "Focus on education in Arabic",
  "ترخيص ASIC/SCB/FCA/DFSA/CMA/BaFin/CySEC":
    "ASIC/SCB/FCA/DFSA/CMA/BaFin/CySEC License",
  "تم التصويت له كأفضل وسيط على MetaTrader 4":
    "Voted best broker on MetaTrader 4",
  "احصل على خصومات على الفروقات السعرية للتداول عالي التردد":
    "Get spread discounts for high-frequency trading",
  "تداول النفط بسهولة مع أفضل الشروط والأسعار - فرصتك لتحقيق الأرباح الآن":
    "Trade oil easily with the best terms and prices — your chance to make profits now",

  // ── Broker flag captions ────────────────────────────────────────────
  "منصة التداول الأفضل في الامارات": "The best trading platform in the UAE",
  "منصة التداول الأفضل في السعودية":
    "The best trading platform in Saudi Arabia",
  "منصة التداول الأفضل في قطر": "The best trading platform in Qatar",
  "منصة التداول الأفضل في الكويت": "The best trading platform in Kuwait",
  "منصة التداول الأفضل في عُمان": "The best trading platform in Oman",
  "منصة التداول الأفضل في البحرين": "The best trading platform in Bahrain",

  // ── Broker page titles ──────────────────────────────────────────────
  "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026":
    "The most trusted trading brokers in the UAE for 2026",
  "فرصة شراء سهم سالك في الإمارات":
    "An opportunity to buy Salik stock in the UAE",
  "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026":
    "The most trusted trading brokers in Kuwait for 2026",
  "أفضل وسطاء التداول الموثوقين في السعودية لعام 2026":
    "The most trusted trading brokers in Saudi Arabia for 2026",
  "تداول في أسواق المال في السعودية باستخدام حسابات إسلامية":
    "Trade the financial markets in Saudi Arabia using Islamic accounts",
  "تداول في أسواق النفط في السعودية":
    "Trade the oil markets in Saudi Arabia",
  "أفضل وسطاء التداول الموثوقين في قطر لعام 2026":
    "The most trusted trading brokers in Qatar for 2026",
  "أفضل وسطاء التداول الموثوقين في عُمان لعام 2026":
    "The most trusted trading brokers in Oman for 2026",
  "أفضل وسطاء التداول الموثوقين في البحرين لعام 2026":
    "The most trusted trading brokers in Bahrain for 2026",
  "أفضل وسطاء التداول الموثوقين في الأردن لعام 2026":
    "The most trusted trading brokers in Jordan for 2026",

  // ── Redesigned /gcc page (header / hero / stats / compare / about) ───
  "من نحن": "Who we are",
  "تحذير المخاطر": "Risk warning",
  "انضم إلينا كشريك": "Join us as a partner",
  "لك": "for you",
  "نساعدك في العثور على الوسيط الأنسب لاحتياجاتك، وفهم الاختلافات بين أفضل الوسطاء في كل بلد، بمراجعات مستقلة لا تتأثر بأي شركة وساطة.":
    "We help you find the broker best suited to your needs and understand the differences between the best brokers in each country, with independent reviews unaffected by any brokerage firm.",
  "اختر بلدك لتجد الوسيط الأفضل لك":
    "Choose your country to find the best broker for you",
  "قارن الآن": "Compare now",
  "مستخدم": "Users",
  "دولة": "Countries",
  "مراجعة": "Reviews",
  "المقارنة": "Comparison",
  "يمكنك العثور على تحليلات وتقييمات للعلامات التجارية العالمية، وكذلك الوسطاء الأكثر تخصصًا في كل مجال.":
    "You can find analyses and ratings of global brands, as well as the most specialized brokers in each field.",
  "الوسيط": "Broker",
  "النوع": "Type",
  "تقييم المستخدمين": "User rating",
  "قارن": "Compare",
  "بيانات توضيحية لغرض عرض التصميم. التقييمات الفعلية تُحدَّث بشكل مستمر عند الإطلاق.":
    "Illustrative data for design-preview purposes. Actual ratings are updated continuously at launch.",
  "تداول اجتماعي ومنصة استثمار": "Social trading and investment platform",
  "عقود الفروقات (CFDs)": "Contracts for difference (CFDs)",
  "تداول عبر الإنترنت": "Online trading",
  "نلتزم بتوفير معلومات محايدة وغير متحيزة لمستخدمينا. يقوم فريق الخبراء لدينا بمراجعة وتحليل الوسطاء والسوق بشكل مستمر، ولا يتأثر تحليلهم بأي مؤسسات مالية أو شركات وساطة.":
    "We are committed to providing neutral, unbiased information to our users. Our team of experts continuously reviews and analyzes brokers and the market, and their analysis is not influenced by any financial institution or brokerage firm.",
  "خدماتنا في أكثر من 50 دولة": "Our services in more than 50 countries",
  "بغض النظر عن مكان تواجد مستخدمينا، يقدّم ميزان تغطية شاملة تمتد بين أوروبا وآسيا وأمريكا وأفريقيا.":
    "No matter where our users are, Mizan provides comprehensive coverage spanning Europe, Asia, America and Africa.",
  "أكثر من مليون مستخدم": "More than a million users",
  "مستخدمونا هم أقوى دليل على جودتنا. منذ 2022، اعتمد أكثر من مليون مستخدم على ميزان لاتخاذ قرارات مستنيرة عند اختيار وسيطهم.":
    "Our users are the strongest proof of our quality. Since 2022, more than a million users have relied on Mizan to make informed decisions when choosing their broker.",
  "استقلالية كاملة في التحليل": "Complete independence in analysis",
  "تحليلاتنا لا تتأثر بأي رسوم أو شراكات تجارية، ونحدّث تقييماتنا دوري لتعكس أداء كل وسيط فعلياً.":
    "Our analyses are not influenced by any fees or commercial partnerships, and we update our ratings regularly to reflect each broker's actual performance.",

  // ── Redesigned disclaimer band / footer ─────────────────────────────
  "تحذير من المخاطر": "Risk warning",
  "اقرأ المزيد": "Read more",
  "© 2026 ميزان — جميع الحقوق محفوظة.": "© 2026 Mizan — All rights reserved.",
  "هذا الموقع مورد مجاني مصمم لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت. قد يضم محتوى مدعوماً أو إعلانات، وقد نحصل على عمولة من الوسطاء المذكورين عند تفاعلك معهم.":
    "This website is a free resource designed to help users make informed decisions online. It may include sponsored content or advertising, and we may earn a commission from the brokers mentioned when you interact with them.",
  "اعرف أكثر عن سياسة الإفصاح": "Learn more about our disclosure policy",
  "الخرائط والنشر": "Sitemap & publishing",

  // ── Partner hero ────────────────────────────────────────────────────
  "كيف نخلق قيمة لشركائنا": "How we create value for our partners",

  // ── Nations grid ────────────────────────────────────────────────────
  "جميع البلدان": "All Countries",
  "اختر بلدك للاطلاع على قائمة أفضل الوسطاء المعتمدين والمقارنة بينهم بمراجعات مستقلة ومحايدة.":
    "Choose your country to view the list of top licensed brokers and compare them with independent, unbiased reviews.",

  // ── Redesigned inner-page section labels ────────────────────────────
  "كن شريكاً": "Become a partner",
  "التصنيف": "The ranking",

  // ── Policy pages (shared) ───────────────────────────────────────────
  "القانوني": "Legal",
  "آخر تحديث: يونيو 2026": "Last updated: June 2026",

  // ── Cookie Policy page ──────────────────────────────────────────────
  "توضّح هذه السياسة كيف يستخدم ميزان ملفات تعريف الارتباط والتقنيات المشابهة عند زيارتك لموقعنا، وما الخيارات المتاحة لك للتحكم بها.":
    "This policy explains how Mizan uses cookies and similar technologies when you visit our website, and what choices you have to control them.",
  "ما هي ملفات تعريف الارتباط؟": "What are cookies?",
  "ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارتك لموقع ميزان. تساعدنا هذه الملفات على تذكّر تفضيلاتك، مثل اللغة المختارة، وعلى فهم كيفية تفاعلك مع الموقع لتحسين تجربتك.":
    "Cookies are small text files that are stored on your device when you visit the Mizan website. They help us remember your preferences, such as your chosen language, and understand how you interact with the site so we can improve your experience.",
  "أنواع ملفات تعريف الارتباط التي نستخدمها": "Types of cookies we use",
  "ملفات ضرورية: لازمة لعمل الموقع بشكل صحيح، مثل حفظ تفضيل اللغة والتنقل بين الصفحات. لا يمكن تعطيلها لأنها أساسية لتشغيل الموقع.":
    "Essential cookies: required for the site to work properly, such as saving your language preference and navigating between pages. They cannot be disabled because they are fundamental to running the site.",
  "ملفات تحليلية: تساعدنا على معرفة عدد الزوار وكيفية استخدامهم للموقع بشكل مجهول الهوية، حتى نتمكن من تحسين المحتوى والأداء.":
    "Analytics cookies: help us understand how many visitors we have and how they use the site anonymously, so we can improve content and performance.",
  "ملفات إعلانية: تُستخدم لعرض محتوى وإعلانات أكثر صلة باهتماماتك، وقد يضعها شركاؤنا الإعلانيون لقياس فعالية الحملات.":
    "Advertising cookies: used to show content and ads more relevant to your interests, and may be set by our advertising partners to measure campaign effectiveness.",
  "كيف نستخدم ملفات تعريف الارتباط": "How we use cookies",
  "نستخدم ملفات تعريف الارتباط لحفظ اختياراتك، وتحليل حركة المرور على الموقع، وتقديم تجربة مخصصة لك. لا نستخدم هذه الملفات لجمع معلومات تعرّف عنك شخصياً دون موافقتك.":
    "We use cookies to save your choices, analyze traffic on the site, and provide a personalized experience. We do not use these files to collect personally identifiable information about you without your consent.",
  "ملفات الأطراف الثالثة": "Third-party cookies",
  "قد يضع بعض شركائنا، مثل مزودي خدمات التحليلات والمعلنين، ملفات تعريف ارتباط خاصة بهم عبر موقعنا. تخضع هذه الملفات لسياسات الخصوصية الخاصة بتلك الأطراف، ونوصيك بمراجعتها.":
    "Some of our partners, such as analytics providers and advertisers, may set their own cookies through our site. These cookies are governed by the privacy policies of those parties, and we encourage you to review them.",
  "كيفية إدارة ملفات تعريف الارتباط": "How to manage cookies",
  "يمكنك التحكم في ملفات تعريف الارتباط أو حذفها في أي وقت من خلال إعدادات متصفحك. يُرجى العلم أن تعطيل بعض الملفات قد يؤثر على عمل أجزاء من الموقع.":
    "You can control or delete cookies at any time through your browser settings. Please note that disabling some cookies may affect how parts of the site work.",

  // ── Privacy Policy page ─────────────────────────────────────────────
  "نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضّح هذه السياسة أنواع المعلومات التي نجمعها وكيفية استخدامها وحمايتها وحقوقك المتعلقة بها.":
    "We respect your privacy and are committed to protecting your personal data. This policy explains the types of information we collect, how we use and protect it, and the rights you have regarding it.",
  "المعلومات التي نجمعها": "Information we collect",
  "نجمع المعلومات التي تقدّمها طوعاً عند التواصل معنا أو التسجيل كشريك، مثل الاسم والبريد الإلكتروني ورقم الهاتف وموقع الشركة.":
    "We collect the information you voluntarily provide when you contact us or register as a partner, such as your name, email, phone number, and company website.",
  "كما نجمع تلقائياً بيانات تقنية محدودة عند زيارتك للموقع، مثل نوع المتصفح ونظام التشغيل والصفحات التي تزورها، وذلك عبر ملفات تعريف الارتباط وتقنيات مشابهة.":
    "We also automatically collect limited technical data when you visit the site, such as your browser type, operating system, and the pages you visit, through cookies and similar technologies.",
  "كيف نستخدم معلوماتك": "How we use your information",
  "نستخدم معلوماتك للرد على استفساراتك، وإدارة طلبات الشراكة، وتحسين محتوى الموقع وخدماته، وتحليل الأداء، والامتثال للمتطلبات القانونية.":
    "We use your information to respond to your inquiries, manage partnership requests, improve the site's content and services, analyze performance, and comply with legal requirements.",
  "لا نبيع معلوماتك الشخصية لأي طرف ثالث.":
    "We do not sell your personal information to any third party.",
  "مشاركة المعلومات": "Sharing information",
  "قد نشارك معلوماتك مع مزودي خدمات موثوقين يساعدوننا في تشغيل الموقع، مثل خدمات الاستضافة والتحليلات، وذلك ضمن حدود ما هو ضروري لأداء عملهم وبموجب التزامات السرية.":
    "We may share your information with trusted service providers who help us operate the site, such as hosting and analytics services, only to the extent necessary for them to perform their work and under confidentiality obligations.",
  "قد نُفصح عن المعلومات إذا اقتضى القانون ذلك أو لحماية حقوقنا وسلامة مستخدمينا.":
    "We may disclose information if required by law or to protect our rights and the safety of our users.",
  "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل استخدام الموقع. لمزيد من التفاصيل، يُرجى الاطلاع على سياسة ملفات تعريف الارتباط الخاصة بنا.":
    "We use cookies to improve your experience and analyze site usage. For more details, please see our Cookie Policy.",
  "أمن البيانات": "Data security",
  "نتّخذ تدابير تقنية وتنظيمية معقولة لحماية معلوماتك من الوصول غير المصرّح به أو الفقدان أو سوء الاستخدام. ومع ذلك، لا يمكن ضمان أمان أي وسيلة نقل عبر الإنترنت بشكل مطلق.":
    "We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. However, no method of transmission over the internet can be guaranteed to be absolutely secure.",
  "حقوقك": "Your rights",
  "يحق لك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها، والاعتراض على معالجتها أو تقييدها. للممارسة أي من هذه الحقوق، يُرجى التواصل معنا.":
    "You have the right to request access to, correction of, or deletion of your personal information, and to object to or restrict its processing. To exercise any of these rights, please contact us.",
  "تواصل معنا": "Contact us",
  "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع بياناتك، يمكنك التواصل معنا عبر القنوات المتاحة على الموقع.":
    "If you have any questions about this Privacy Policy or how we handle your data, you can contact us through the channels available on the site.",
};

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  /** Translate an Arabic source string to the active language. */
  t: (arabic: string) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "mizan-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>("ar");

  // Restore the saved preference after hydration (server always renders "ar").
  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") setLang(saved);
  }, []);

  // Keep the document's lang/dir in sync with the active language.
  React.useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = React.useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = React.useCallback(
    (arabic: string) => (lang === "en" ? AR_TO_EN[arabic] ?? arabic : arabic),
    [lang]
  );

  const value = React.useMemo(
    () => ({ lang, toggle, t }),
    [lang, toggle, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
