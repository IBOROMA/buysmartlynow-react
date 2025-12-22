
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Travel from './pages/Travel';
import ProductDetail from './pages/ProductDetail';
import PartnerDashboard from './pages/PartnerDashboard';
import ScrollToTop from './components/common/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import AuthModal from './components/auth/AuthModal';

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleOpenAuth = (type) => {
    // type can be 'login' or 'partner'
    setAuthMode(type === 'partner' ? 'partner' : 'login');
    setAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Layout onOpenAuth={handleOpenAuth}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/earn" element={<PartnerDashboard />} />
            <Route path="/compare" element={<Deals />} /> {/* Fallback for compare link */}
          </Routes>

          <AuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            initialMode={authMode}
          />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
