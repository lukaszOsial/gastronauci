import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Contact } from './components/Pages/Contact/Contact';
import { Home } from './components/Home/Home';
import { Partnership } from './components/Pages/Partnership/Partnership';
import { Restaurants } from './components/Pages/Order/Features/Restaurants';

export const App = ({ state, dispatch }) => {
  return (
    <div className='app'>
      <Router>
      <Header />
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route 
          path="/order" 
          element={
            <Restaurants
            restaurants={state.restaurants}
            dispatch={dispatch}
          />
          }
        />
        <Route
        path="/partnership"
        element={<Partnership />}
        />
        <Route 
          path="/contact" 
          element={<Contact />}
        />
      </Routes>
     </Router>
    </div>
  );
}

export default App;