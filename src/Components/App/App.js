import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import FineArt from '../FineArt/FineArt';
import Photography from '../Photography/Photography';
import About from '../About/About';
import WebDesign from '../WebDesign/WebDesign';
import ErrorComponent from '../Error/Error';
import './App.css';
import '../../Assets/fonts/font.css';
import PageLoader from '../ReusableComponents/PageLoader/PageLoader';
import Header from '../ReusableComponents/Header/Header';
import Album from '../Photography/Album/Album';
import DetailedView from '../FineArt/DetailedView/DetailedView';
import Background from '../ReusableComponents/Background/Background';
import Contact from '../Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <PageLoader />;
  if (error) return <Navigate to="/error" replace />;

  return (
    <Router>
      <div className="App">
        <Header /> 
        <Background />
        <main>
          <Routes>
            <Route path="/" element={<FineArt />} />
            <Route path="/fineart" element={<FineArt />} />
            <Route path="/fineart/:id" element={<DetailedView />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/webdesign" element={<WebDesign />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<ErrorComponent />} />
            <Route path="/*" element={<Navigate to="/error" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
