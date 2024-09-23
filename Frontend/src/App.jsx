import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Accops/Dashboard";
import Lockscreen from "./pages/Lockscreen";
import Test from "./pages/test";

// import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="relative w-screen h-screen">
        {/* Left sidebar */}
        <Routes>
          <Route path="/" element={<Lockscreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accops/dashboard" element={<Dashboard />} />
          <Route path="/accops/jiocloudpc" element={<Test />} />
          <Route path="/accops/profile" element={<Test />} />
          <Route path="/accops/settings" element={<Test />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
