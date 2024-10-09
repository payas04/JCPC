import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Accops/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Lockscreen = lazy(() => import("./pages/Lockscreen"));
const JioCloudPc = lazy(() => import("./pages/Accops/JioCloudPc"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Profile = lazy(() => import("./pages/Accops/Profile"));
const Activities = lazy(() => import("./pages/Accops/Activities"));

const App = () => {
	return (
		<Router>
			<div className="relative w-screen h-screen">
				<Header />
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Lockscreen />} />
						<Route path="/home" element={<Home />} />
						<Route path="/accops/dashboard" element={<Dashboard />} />
						<Route path="/accops/jiocloudpc" element={<JioCloudPc />} />
						<Route path="/accops/profile" element={<Profile />} />
						<Route path="/accops/activities" element={<Activities />} />
					</Routes>
				</Suspense>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
