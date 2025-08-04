import Header from "./Header";
import Homepage from "./Homepage";
import Footer from "./Footer";
import FriendsPage from "./FriendsPage";
import ProfilePage from "./ProfilePage";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>          

      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;