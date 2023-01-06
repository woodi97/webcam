import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import { AnimatePresence } from 'framer-motion';
import SpecPage from '@/pages/SpecPage';
import { CommonLayout } from '@/components/layout';

function App() {
  const location = useLocation();

  return (
    <CommonLayout headerFixed>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/spec" element={<SpecPage />} />
          <Route path="/*">Page Not Found</Route>
        </Routes>
      </AnimatePresence>
    </CommonLayout>
  );
}

export default App;
