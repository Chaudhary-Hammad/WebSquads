// import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Website from './Components/Website';
import Branding from './Components/Branding';
import SEO from "./Components/SEO";
import PPC from "./Components/PPC"
import About from './Components/About';
import ContactForm from './Components/ContactForm';


// import Navbar from './Components/Navbar';

function App() {
  return (
  

<Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Website" element={<Website />} />
          <Route path="/Branding" element={<Branding />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/UI/UX" element={<PPC />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About us" element={<About/>} />
          <Route path="/ContactForm" element={<ContactForm/>} />
        </Routes>
       
        
      </>
    </Router>
  
     
  );
}

export default App;
