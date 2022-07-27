// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Components/header/header";
import Home from "./Components/home/home";
import About from "./Components/about/about";
import Fetcher1 from "./Components/fetcher1/fetcher1";
import Fetcher2 from "./Components/fetcher2/fetcher2";
import Fetcher3 from "./Components/fetcher3/fetcher3";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Fetcher1 />
      <Fetcher2 />
      <Fetcher3 />
      <Footer />
    </>
  );
}

export default App;
