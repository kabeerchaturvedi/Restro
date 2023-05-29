import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import OrderTrack from "./components/OrderTracking/OrderTrack";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/cart" Component={Cart} />
            <Route exact path="/footer" Component={Footer} />
            <Route exact path="/" Component={Header} />
            <Route exact path="/Menu" Component={Menu} />
            <Route exact path="/OrderTrack" Component={OrderTrack} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
