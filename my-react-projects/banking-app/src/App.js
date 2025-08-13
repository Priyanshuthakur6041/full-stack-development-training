
import Footer from './Footer';
import Header  from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CreateAccountPage from './CreateAccountPage';
import BankDetailPage from './BankDetailPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
 <Header />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>


    
      
      
      <Footer />
  </BrowserRouter>
  );
}

export default App;