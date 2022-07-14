import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav';
import Pages from './pages/Pages';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <GlobalStyles />

      <BrowserRouter>

        <Nav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
