import "./App.css";
import Routes from "./routes/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
// import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
