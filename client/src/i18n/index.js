import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  pl: {
    translation: {
      helmet: {
        head: {
          title: "Grze. | Programista Front-End | Tworzenie Nowoczesnych Stron Internetowych",
          description: "Jestem doświadczonym programistą front-end, specjalizującym się w tworzeniu nowoczesnych i responsywnych stron internetowych. Oferuję unikalne rozwiązania z wykorzystaniem najnowszych technologii webowych. Skontaktuj się ze mną, aby stworzyć funkcjonalne i atrakcyjne strony dla Twojego biznesu.",
          keywords: "programista front-end, front-end developer, tworzenie stron internetowych, HTML, CSS, JavaScript, React, responsywność",
          socialContent: "Jestem doświadczonym programistą front-end, specjalizującym się w tworzeniu nowoczesnych i responsywnych stron internetowych."
        },
      },
      navbar: {
        home: "Start",
        profile: "Profil",
        logout: "Logout",
      },
    }
  },
  en: {
    translation: {
      helmet: {
        head: {
          title: "Grze. | Front-End Programmer | Creating Modern Websites",
          description: "I am an experienced front-end developer, specialising in creating modern and responsive websites. I offer unique solutions using the latest web technologies. Contact me to create functional and attractive websites for your business.",
          keywords: 'front-end developer, front-end developer, web development, HTML, CSS, JavaScript, React, responsive',
          socialContent: "I am an experienced front-end developer, specialising in creating modern and responsive websites."
        },
      },
      navbar: {
        home: "Home",
        profile: "Profile",
        logout: "Logout",
      },
    }
  },
  de: {
    translation: {
      helmet: {
        head: {
          title: "Grze. | Front-End-Programmierer | Erstellung moderner Websites",
          description: "Ich bin ein erfahrener Front-End-Entwickler, der sich auf die Erstellung moderner und responsiver Websites spezialisiert hat. Ich biete einzigartige Lösungen unter Verwendung der neuesten Webtechnologien. Kontaktieren Sie mich, um funktionale und attraktive Websites für Ihr Unternehmen zu erstellen.",
          keywords: "Front-End-Entwickler, Front-End-Entwickler, Webentwicklung, HTML, CSS, JavaScript, React, responsive",
          socialContent: "Ich bin ein erfahrener Frontend-Entwickler, der sich auf die Erstellung moderner und responsiver Websites spezialisiert hat."
        },
      },
      navbar: {
        home: "Start",
        profile: "Profil",
        logout: "Logout",
      },
    }
  },
  es: {
    translation: {
      helmet: {
        head: {
          title: "Grze. | Programador Front-End | Creación de sitios web modernos",
          description: "Soy un programador front-end con experiencia, especializado en la creación de sitios web modernos y con capacidad de respuesta. Ofrezco soluciones únicas utilizando las últimas tecnologías web. Ponte en contacto conmigo para crear sitios web funcionales y atractivos para tu negocio.",
          keywords: 'desarrollador front-end, desarrollador front-end, desarrollo web, HTML, CSS, JavaScript, React, responsive',
          socialContent: "Soy un desarrollador front-end con experiencia, especializado en la creación de sitios web modernos y responsive."
        },
      },
      navbar: {
        home: "Home",
        profile: "Perfil",
        logout: "Logout",
      },
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: ["pl", "en", "de", "es"],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;