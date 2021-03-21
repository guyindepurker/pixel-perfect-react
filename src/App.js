import './styles/_style.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './cmps/Header/Header';
import Footer from './cmps/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
