import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetatil from "./components/ProductDetail/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Checkout from "./components/Checkout/Checkout";
import Failure from "./components/Redirect/Failure";
import Pending from "./components/Redirect/Pending";
import Success from "./components/Redirect/Success";
import Category from "./components/Category/Category";

function App() {
  return (
    <Router>
      <main className="overflow-hidden bg-gray-300">
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetatil />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/category/:id" element={<Category />}/>
      </Routes>
      <Footer />
      </main>
    </Router>
  );
}

export default App;
