import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Profile from './components/Profile';
import ContactSection from './components/ContactSection';
import LanguagePage from './components/LanguagePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-light">
        <Header />
        <div className="container mx-auto p-4 sm:p-8">
          <Routes>
            <Route path="/" element={
              <>
                <Menu />
                <Profile />
                <ContactSection />
              </>
            } />
            <Route path="/programs/:language" element={<LanguagePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
