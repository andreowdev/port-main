import  { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioShell from '../components/portfolio/PortfolioShell.jsx';

const YourMainComponent = lazy(() => import('../pages/home.jsx'));
const Projetos = lazy(() => import('../pages/projetos.jsx'));
const Contato = lazy(() => import('../pages/contacts.jsx'));

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.18 }}
  >
    {children}
  </motion.div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait"> 
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

const App = () => (
  <HashRouter> 
    <PortfolioShell>
      <AnimatedRoutes />
    </PortfolioShell>
  </HashRouter>
);

export default App;
