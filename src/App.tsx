import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Routes from './routes';

import GlobalStyles from './styles/global';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
