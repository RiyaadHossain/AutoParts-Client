import Footer from "./Pages/Home/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home/Landing";
import Blog from "./Pages/Others/Blog";
import Purchase from "./Pages/Others/Purchase";
import LogIn from "./Pages/Auth/LogIn";
import { Toaster } from 'react-hot-toast';
import PrivateRoute from "./Authentication/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/purchase/:id" element={<PrivateRoute><Purchase /></PrivateRoute>} />
        </Routes>
      <Footer />
      </Navbar>
      <Toaster/>
    </div>
  );
}

export default App;
