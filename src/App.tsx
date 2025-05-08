import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <main>
      <Header />
      <section className="flex container mx-auto">
        <Aside />
        <Products />
      </section>
      <Footer />
    </main>
  );
}

export default App;
