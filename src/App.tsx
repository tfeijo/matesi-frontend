import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
