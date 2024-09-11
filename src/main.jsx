import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Importação do provedor de i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';  // O arquivo de configuração de i18n

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provedor de tradução i18n ao redor do App */}
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);
