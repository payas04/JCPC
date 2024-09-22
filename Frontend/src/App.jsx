import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Accops/Dashboard";

// import "./App.css";

const App = () => {
	return (
		<Router>
			<div className="relative w-screen h-screen">
				{/* Header */}
				<Header />
				{/* Left sidebar */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/accops/dashboard" element={<Dashboard />} />
					<Route path="/" element={<Home />} />
					<Route path="/" element={<Home />} />
				</Routes>
				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
};

export default App;
