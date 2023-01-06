import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import { RecoilRoot } from 'recoil';
import { ModalContainer } from '@/components/containers';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Root() {
  return (
    <RecoilRoot>
      <Router basename={import.meta.env.BASE_URL}>
        <App />
      </Router>
      <ModalContainer />
      <ToastContainer />
    </RecoilRoot>
  );
}

export default Root;
