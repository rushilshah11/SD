import "./App.css";
import Employees from "./components/Employees";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Employees></Employees>
      <Footer></Footer>
    </div>
  );
}

export default App;
