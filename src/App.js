import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderreview" element={<OrderReview />} />
      </Routes>
    </div>
  );
}

export default App;
