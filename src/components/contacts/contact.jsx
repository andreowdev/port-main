import { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';



const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const closeModal = () => setShowModal(false);

  return (
    <section id="contact" className="py-16 bg-gray-900 bg-opacity-80">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">{t('Contact.title')}</h2>
        <div className="mt-12 flex justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=92991784771&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="4x" />
          </a>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('contact.modalSuccessTitle')}</h3>
            <p className="text-gray-700">{t('contact.modalSuccessSubtitle')}</p>
            <button
              onClick={closeModal}
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            >
              {t('contact.modalCloseButton')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
