import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "HOME": "Home",
      "WHO": "Who We Are",
      "NEWS": "Our News",
      "DIPLOMAS": "Training Diplomas",
        "MEMBERSHIP": "Membership",
        "SUPPORT": "Support Us",
        "CONTACT": "Contact Us",
        "LANG": "Language",
        "EN": "English",
        "AR": "Arabic",
        "INSPIRE": "Inspire Your Future",
        "ABOUT": "About Our Institution",
        "ABOUT-TXT": "An Iraqi non-governmental organization registered under the decision of the Secretariat of the Council of Ministers, working in the field of development, political and democratic empowerment, enjoys wide partnerships with Iraqi governmental, educational, civil society and foreign organizations.",
        "N&A": "News & Activities",
        "N&A-H": "News or Activities Title",
        "N&A-TXT": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        "JEEL": "Jeel Podcast",
        "SPONSORCARD": "All sectors are responsible for advancement, progress, improvement in society.",
        "SPONSORCARD-TXT": "Your contributions reflect a high sense of responsibility towards your community.",
        "JOINUS-BTN": "Join Us",
        "MIDC": "Memberships in different categories",
        "JOINUSNOW": "Join Us Now",
        "DEFINE": "An Iraqi non-governmental organization registered under the decision of the Secretariat of the Council of Ministers, working in the field of development, political and democratic empowerment, enjoys wide partnerships with Iraqi governmental, educational, civil society and foreign organizations.",
        "COPYRIGHT": "© Copyright 2021 Jeel for Development and Democracy | Developed by Core Istanbul",
    }
  },
  ar: {
    translation: {
      "HOME": "الصفحة الرئيسية",
        "WHO": "من نحن",
        "NEWS": "أخبارنا",
        "DIPLOMAS": "الدبلومات التدريبية",
        "MEMBERSHIP": "العضوية",
        "SUPPORT": "ادعمنا",
        "CONTACT": "تواصل معنا",
        "LANG": "اللغة",
        "EN": "الإنجليزية",
        "AR": "العربية",
        "INSPIRE": "استلهم أفكارك، اعمل بهدوء وكوّن علاقات جديدة",
        "ABOUT": "عن المؤسسة",
        "ABOUT-TXT": "مؤسسة مجتمع مدني عراقية مسجلة بموجب قرار امانة مجلس الوزراء تعمل في قطاع التنمية والتمكين السياسي والديمقراطي، تتمتع بشراكات واسعة مع مؤسسات حكومية وتعليمية ومنظمات مجتمع مدني عراقية واجنبية.",
        "N&A": "الأخبار والأنشطة",
        "N&A-H": "عنوان الاعلانات او الاخبار",
        "N&A-TXT": "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ...",
        "JEEL": "بودكاست Jeel",
        "SPONSORCARD": "جميع القطاعات  تتحمل مسؤولية الارتقاء والتقدم، والتحسين في المجتمع.",
        "SPONSORCARD-TXT": "مساهماتكم تنم عن شعور عالٍ بالمسؤولية اتجاه مجتمعكم.",
        "JOINUS-BTN": "انضم الينا",
        "MIDC": "عضويات بفئات مختلفةإنضم لنا الآن",
        "JOINUSNOW": "انضم الينا الآن",
        "DEFINE": "مؤسسة مجتمع مدني عراقية مسجلة بموجب قرار امانة مجلس الوزراء تعمل في قطاع التنمية والتمكين السياسي والديمقراطي، تتمتع بشراكات واسعة مع مؤسسات حكومية وتعليمية ومنظمات مجتمع مدني عراقية واجنبية.",
        "COPYRIGHT": "© حقوق النشر  لمؤسسة جيل للتنمسة ودعم الديمقراطية  |   تم تطويره من قبل كور اسطنبول  ",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;