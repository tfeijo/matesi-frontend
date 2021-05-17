import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Routes from './routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
