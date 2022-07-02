import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Nav from './components/Nav'
import Home from './components/Home';
import Pages from './pages/Pages'


function App() {
  return (
    <div>
      <GlobalStyles />

      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
