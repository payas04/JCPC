import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Accops/Dashboard";
import Lockscreen from "./pages/Lockscreen";
import Test from "./pages/test";
import Profile from "./pages/Profile";
import JioCloudPc from "./pages/JioCloudPc";

const App = () => {
  return (
    <Router>
      <div className="relative w-screen h-screen">
        {/* Left sidebar */}
        <Routes>
          <Route path="/" element={<Lockscreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accops/dashboard" element={<Dashboard />} />
          <Route path="/accops/jiocloudpc" element={<JioCloudPc />} />
          <Route path="/accops/profile" element={<Profile />} />
          <Route path="/accops/settings" element={<Test />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
