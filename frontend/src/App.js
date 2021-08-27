import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import MiniNav from "./components/MiniNav";
function App() {
  return (
    <>
      <Navbar />;
      <MiniNav />
      <Slider />
    </>
  );
}

export default App;
