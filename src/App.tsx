import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Routes from './routes';

import GlobalStyles from './styles/global';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
