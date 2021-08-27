import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import MiniNav from "./components/MiniNav";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />;
      <MiniNav />
      <Slider />
      <Products />
    </>
  );
}

export default App;
