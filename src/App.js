import "./App.css";
import Employees from "./components/Employees";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonials"


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Employees></Employees>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;


