import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
 


const YourMainComponent = lazy(() => import('../pages/home.jsx'));
const Projetos = lazy(() => import('../pages/projetos.jsx'));
const Contato = lazy(() => import('../pages/contacts.jsx'));

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> {/* Espera a animação de saída terminar antes de carregar a próxima página */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Suspense fallback={<div>:)</div>}>
              <YourMainComponent />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/projetos" element={
          <PageWrapper>
            <Suspense fallback={<div>:)</div>}>
              <Projetos />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/contato" element={
          <PageWrapper>
            <Suspense fallback={<div>:)</div>}>
              <Contato />
            </Suspense>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

// Componente principal da aplicação
const App = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default App;
