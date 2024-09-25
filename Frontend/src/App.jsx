import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Accops/Dashboard";
import Lockscreen from "./pages/Lockscreen";
import Test from "./pages/Test";
import Profile from "./pages/Accops/Profile";
import Header from "./components/Header";
import JioCloudPc from "./pages/Accops/JioCloudPc";
import Activities from "./pages/Accops/Activities";

const App = () => {
  return (
    <Router>
      <div className="relative w-screen h-screen">
        <Header />
        {/* Left sidebar */}
        <Routes>
          <Route path="/" element={<Lockscreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accops/dashboard" element={<Dashboard />} />
          <Route path="/accops/jiocloudpc" element={<JioCloudPc />} />
          <Route path="/accops/profile" element={<Profile />} />
          <Route path="/accops/settings" element={<Test />} />
          <Route path="/accops/activities" element={<Activities />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
