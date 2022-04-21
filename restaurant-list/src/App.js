import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurantsDetails from './components/RestaurantsDetails';

function App() {
  return (
    <Router>
      <Header />


      <main className="py-3">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Restaurants/:id' element={<RestaurantsDetails />} />
        </Routes>


      </main>
      <Footer />

    </Router>
  );
}

export default App;
