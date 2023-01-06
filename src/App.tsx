import { Route, Routes, useLocation } from 'react-router-dom';
import { MainPage } from './pages';

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainPage />} />
      <Route path="/*">Page Not Found</Route>
    </Routes>
  );
}

export default App;
