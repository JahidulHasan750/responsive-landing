
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Anlytics from "./components/Anlytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Anlytics></Anlytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
