import Footer from "./Pages/Home/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home/Landing";
import Blog from "./Pages/Others/Blog";
import Purchase from "./Pages/Others/Purchase";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/purchase/:id" element={<Purchase />} />
        </Routes>
      <Footer />
      </Navbar>
    </div>
  );
}

export default App;
