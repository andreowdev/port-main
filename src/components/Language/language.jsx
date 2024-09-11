import '../../i18n.js';
import { useTranslation } from "react-i18next";

export default function Language() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
        <div className="flex flex-col items-center space-y-2">
          <div className="flex justify-end mb-4">
            <button 
              className={`mr-2 px-4 py-2 rounded-md text-white transition-colors ${
                i18n.language === 'pt' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
              }`} 
              onClick={() => changeLanguage('pt')}
            >
              🇧🇷 Português
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-white transition-colors ${
                i18n.language === 'en' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-700'
              }`} 
              onClick={() => changeLanguage('en')}
            >
              🇺🇸 English
            </button>
          </div>
        </div>
    );
}
