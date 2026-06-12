import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      {/* <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
      /> */}
      <>
  <ToastContainer position="top-right" />
  {/* Routes */}
</>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;