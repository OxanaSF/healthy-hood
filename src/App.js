import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import Pages from './pages/Pages';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className='app'>
      <GlobalStyles />

      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
