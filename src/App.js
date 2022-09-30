import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home/home";
import PrivacyPolicy from "./components/extraPages/privacyPolicy";
import ReturnRefund from "./components/extraPages/returnAndRefund";
import UserAgreement from "./components/extraPages/userAgreement";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/screen6/Footer";
import Contact from "./components/footerContact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/return&refund" element={<ReturnRefund />} />
        <Route exact path="/terms-condition" element={<UserAgreement />} />
      </Routes>
      <Footer />
      <Contact />
    </>
  );
}

export default App;
