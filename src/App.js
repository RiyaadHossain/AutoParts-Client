import Footer from "./Pages/Home/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Home/Landing";
import Blog from "./Pages/Others/Blog";
import Purchase from "./Pages/Others/Purchase";
import LogIn from "./Pages/Auth/LogIn";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Authentication/PrivateRoute";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MyOrder />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
          <Route
            path="/purchase/:id"
            element={
              <PrivateRoute>
                <Purchase />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Navbar>
      <Toaster />
    </div>
  );
}

export default App;
