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
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AddItem from "./Pages/Dashboard/AddItem";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageParts from "./Pages/Dashboard/ManageParts";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<MyProfile />} />
            <Route path="my-order" element={<MyOrder />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="add-item" element={<AddItem />} />
            <Route path="manage-order" element={<ManageOrder />} />
            <Route path="manage-Parts" element={<ManageParts />} />
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
