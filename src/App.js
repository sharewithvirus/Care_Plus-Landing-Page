
import './App.css';
import Contact from './components/footerContact/Contact';
import Navbar from './components/navbar/Navbar';
import Screen1 from './components/screen1/Screen1';
import Screen2 from './components/screen2/Screen2';
import Screen3 from './components/screen3/Screen3';
import Screen4 from './components/screen4/Screen4';
import Screen5 from './components/screen5/Screen5';
import Footer from './components/screen6/Footer';

function App() {
  return (
    <>
     <div className="container-fluid mt-5 pt-5 " >
    <Navbar/>
    <Screen1/>
    <Screen2/>
    <Screen3/>
    <Screen4/>
    <Screen5/>

</div>

<Footer/>
<Contact/>
    </>
      
  );
}

export default App;
