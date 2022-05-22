import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home/Landing";
import Blog from "./Pages/Others/Blog";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
