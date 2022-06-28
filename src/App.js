import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Order } from './components/Pages/Order/Order';
import { Contact } from './components/Pages/Contact/Contact';
import Body from './components/Body/Body';

function App() {
  return (
    <div className='app'>
      <Router>
      <Header />
      <Routes>
        <Route 
          path="/order" 
          element={<Order />}
          exact
        />
        <Route 
          path="/contact" 
          element={<Contact />}
          exact
        />
      </Routes>
     </Router>
     <Body/>
    </div>
  );
}

export default App;
