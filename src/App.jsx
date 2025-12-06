import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import './App.css'; 
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import PortfolioPage from "./components/PortfolioPage";

function App() {
    return (
     
      <>
       
            
          
               
                <Routes>
                  
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    
                 
                    
                </Routes>
              
          
       </>
    );
}

export default App;