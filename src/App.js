import './styles/_style.scss';

import Footer from './cmps/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

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
