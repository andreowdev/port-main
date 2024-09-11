import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false); 

  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mjhh8bk', 'template_vjsjysw', e.target, 'lP7SL1kR-MI11unzn')
      .then(
        (result) => {
          console.log(result.text);
          setFormData(initialState); 
          setShowModal(true); 
          // Recarregar a página após 3 segundos
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div id="contact" className="py-14 rounded-lg bg-black bg-opacity-35">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">{t('Contact.title')}</h2>
            </div>
            <form name="contactForm" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input block w-full py-3 px-4 mb-3 rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('Contact.placeholderName')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input block w-full py-3 px-4 mb-3 rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('Contact.placeholderEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  className="form-textarea block w-full py-3 px-4 mb-3 rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder={t('Contact.placeholderMessage')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn bg-[#3282B8] hover:bg-[#5aabb8] mt-3 text-white font-bold py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {t('Contact.submitButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-12 mt-12">
          <div className="row">
            <div className="social flex justify-center">
              <ul className="flex">
                <li className="mr-4">
                  <a href={t('socials.whatsapp')} className="text-gray-600 hover:text-blue-500">
                    <FontAwesomeIcon icon={faWhatsapp} color='white' size="4x" />
                  </a>
                </li>
                <li className="mr-4">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">{t('contact.modalSuccessTitle')}</h2>
                <p className="text-gray-700">{t('contact.modalSuccessSubtitle')}</p>
              </div>
              <div className="text-center mt-6">
                <button
                  className="btn bg-[#3282B8] hover:bg-[#5aabb8] text-white font-bold py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={closeModal}
                >
                  {t('contact.modalCloseButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
