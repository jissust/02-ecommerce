import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <section className="flex">
        <Aside />
        <Body />
      </section>
      <Footer/>
    </main>
  );
}

export default App;
