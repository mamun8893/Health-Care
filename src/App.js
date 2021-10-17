import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
