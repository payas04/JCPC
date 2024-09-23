import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Accops/Dashboard";
import Lockscreen from "./pages/Lockscreen";

const App = () => {
  return (
    <Router>
      <div className="relative w-screen h-screen">
        {/* Left sidebar */}
        <Routes>
          <Route path="/" element={<Lockscreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/accops/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
