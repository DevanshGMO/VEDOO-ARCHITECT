import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import AnnouncementBar from "./Components/AnnouncementBar";
import Navbar from "./Components/Navbar";
import Aboutus from "./Pages/Aboutus";
import HowItWorks from "./Pages/HowItWorks";
import Portfolio from "./Pages/Portfolio";
import Contactus from "./Pages/Contactus";
import Moodboard from "./Pages/Moodboard";
import Login from "./Pages/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Pricing from "./Pages/Pricing";
import OrderSummaryCard from "./Pages/OrderSummaryCard";
import ShippingAddress from "./Pages/ShippingAddress";
import Kitchen from "./Pages/Kitchen";  
import Livingroom from "./Pages/Livingroom";
import Bedroom from "./Pages/Bedroom"
import DesignChoice from "./Pages/DesignChoice";
import ScrollToTop from "./Hooks/ScrollToTop";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Moodboard" element={<Moodboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ordersummary" element={<OrderSummaryCard />} />
        <Route path="/kitchen" element={<Kitchen/>} /> 
        <Route path="/livingroom" element={<Livingroom/>}/>
        <Route path="/bedroom" element={<Bedroom/>} />
        <Route path="/shipping" element={<ShippingAddress />} />
        <Route path="/MoodboardSelection" element={<DesignChoice/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
