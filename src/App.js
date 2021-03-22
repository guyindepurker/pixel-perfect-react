import './styles/_style.scss';

import Header from './cmps/Header/Header';
import Footer from './cmps/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';

function App() {
  return (
    <div className='App'>
        <main>
          <HomePage></HomePage>
        </main>
        <Footer />
    </div>
  );
}

export default App;
