import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetatil from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <Router>
      <main>
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetatil />} />
      </Routes>
      <Footer />
      </main>
    </Router>
  );
}

export default App;
