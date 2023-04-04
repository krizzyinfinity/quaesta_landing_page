import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          quaesta: "Quaesta",
          title: "Not just a regular marketplace",
          donwload:"DOWNLOAD",
          about:"What is it about?",
          lost:"Post your lost and found belongings",
          hobby:" Need someone who has the same hobby as you? Post it!",
          sideJob:"Available for a side job or need someone to maw you lawn? Post it!",
          rent:"Rent, buy, sell or swap",
          barter:"Give away your things, or simply go back to basis and barter",
          advices:"Ask or give advices and recommendations in a certain community",
          whoFor:"Great for local residents, for expats and tourists!",
          alert:" Share your stolen things and alert people",
          copyright:"Copyright"
        }
      },
      hr: {
        translation: {
          quaesta: "Quaesta",
          title: "Mnogo više od običnog oglasnika",
          donwload:"DOWNLOAD",
          about:"O čemu se tu radi?",
          lost:"Oglasite svoje izgubljene i nađene stvari",
          hobby:" Trebate nekoga za zajednički hobi? Objavi to!",
          sideJob:"Dostupan si za sporedni posao ili trebaš nekoga da ti ošiša travnjak? Objavi!",
          rent:"Iznajmi, kupi, prodaj ili zamijeni",
          barter:"Poklonite svoje stvari ili se jednostavno vratite na početak i obavljajte robnu razmjenu",
          advices:"Pitajte ili dajte savjete i preporuke u lokalnoj zajednici",
          whoFor:"Izvrsna aplikacija za lokalno stanovništvo, posjetitelje i turiste!",
          alert:" Objavite ako vam je nešto ukradeno i upozorite ljude",
          copyright:"Copyright"
        }
      },
      fr: {
        translation: {
          quaesta: "Quaesta",
          title: "Pas seulement un marché régulier",
          donwload:"DOWNLOAD",
          about:"De quoi s'agit-il?",
          lost:"Déposez vos objets perdus et trouvés",
          hobby:"Besoin d'un copain pour votre passe-temps? Postez-le!",
          sideJob:"Disponible pour un travail d'appoint ou avez-vous besoin de quelqu'un pour tondre votre pelouse? Postez-le!",
          rent:"Louer, acheter, vendre ou échanger",
          barter:"Faites don de vos affaires ou revenez simplement au début et troquez",
          advices:"Demandez ou donnez des conseils et des recommandations dans une certaine communauté",
          whoFor:"Idéal pour les résidents locaux, pour les expatriés et les touristes !",
          alert:"Partagez vos objets volés et alertez les gens",
          copyright:"Copyright"
        }
      },
      it: {
        translation: {
          quaesta: "Quaesta",
          title: "Poco più di un semplice mercato",
          donwload:"DOWNLOAD",
          about:"Di cosa si tratta?",
          lost:"Pubblica i tuoi oggetti smarriti e ritrovati",
          hobby:" Hai bisogno di qualcuno che abbia il tuo stesso hobby? Pubblicalo!",
          sideJob:"Disponibile per un lavoro secondario o hai bisogno di qualcuno che ti tagli il prato? Pubblicalo!",
          rent:"Affittare, comprare, vendere o scambia",
          barter:"Dai via le tue cose o torna all'inizio e baratta",
          advices:"Chiedi o dai consigli e raccomandazioni in una determinata comunità",
          whoFor:"Ottimo per residenti locali, per espatriati e turisti!",
          alert:" Condividi le tue cose rubate e allerta le persone",
          copyright:"Copyright"
        }
      },
      es: {
        translation: {
          quaesta: "Quaesta",
          title: "No es solo un mercado regular",
          donwload:"DOWNLOAD",
          about:"De qué se trata?",
          lost:"Publique sus pertenencias perdidas y encontradas",
          hobby:" Necesitas a alguien que tenga la misma afición que tú? Publícalo!",
          sideJob:"Disponible para un trabajo secundario o necesita a alguien para maullar su césped? Publícalo!",
          rent:"Alquilo, compro, vendo o permuto",
          barter:"Regala tus cosas, o simplemente regresa al principio y haz trueques.",
          advices:"Pregunta o da consejos y recomendaciones en una determinada comunidad",
          whoFor:"Excelente para residentes locales, expatriados y turistas!",
          alert:" Comparte tus cosas robadas y alerta a las personas.",
          copyright:"Copyright"
        }
      },
      de: {
        translation: {
          quaesta: "Quaesta",
          title: "Ein bisschen mehr als nur ein Marktplatz",
          donwload:"DOWNLOAD",
          about:"Warum geht es um?",
          lost:"Posten Sie Ihre verlorenen und gefundenen Sachen",
          hobby:" Sie brauchen jemanden, der das gleiche Hobby hat wie Sie? Veröffentliche es!",
          sideJob:"Stehen Sie für einen Nebenjob zur Verfügung oder brauchen Sie jemanden, der Ihren Rasen mäht? Veröffentliche es!",
          rent:"Mieten, kaufen, verkaufen oder tauschen",
          barter:"Verschenken Sie Ihre Sachen oder gehen Sie einfach zurück zum Anfang und tauschen Sie",
          advices:"Fragen oder geben Sie Ratschläge und Empfehlungen in einer lokalen Gemeinschaft!",
          whoFor:"Großartig für Einheimische, für Expats und Touristen!",
          alert:" Teilen Sie Ihre gestohlenen Sachen und alarmieren Sie die Leute",
          copyright:"Copyright"
        }
      },
    }
  });

export default i18n;