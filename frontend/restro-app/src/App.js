import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import OrderTrack from "./components/OrderTracking/OrderTrack";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/cart" Component={Cart} />
            <Route exact path="/" Component={Menu} />
            <Route exact path="/OrderTrack" Component={OrderTrack} />
          </Routes>
          <Footer/>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
