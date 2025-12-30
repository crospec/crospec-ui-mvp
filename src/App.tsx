import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Solution from './components/Solution';
import TargetAudience from './components/TargetAudience';
import Deliverables from './components/Deliverables';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';
import PilotPage from './pages/PilotPage';
import ChallengesPage from './pages/ChallengesPage';
import ExpertLoginPage from './pages/ExpertLoginPage';
import ScrollToHash from './components/ScrollToHash';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Solution />
        <TargetAudience />
        <Deliverables />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilot" element={<PilotPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/expert-login" element={<ExpertLoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
