import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import AccopsLayout from "./components/layouts/AccopsLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import AccopsLogin from "./pages/Accops/AccopsLogin";
import { Toaster } from "react-hot-toast";

const Dashboard = lazy(() => import("./pages/Accops/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Lockscreen = lazy(() => import("./pages/Lockscreen"));
const AccopsTeam = lazy(() => import("./pages/Accops/AccopsTeam"));
const Footer = lazy(() => import("./components/Footer"));

const AccopsAdmin = lazy(() => import("./pages/Accops/AccopsAdmin"));
const Profile = lazy(() => import("./pages/Accops/Profile"));
const Activities = lazy(() => import("./pages/Accops/Activities"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const protectedRoutes = [
	{ path: "dashboard", component: Dashboard },
	{ path: "myteam", component: AccopsTeam },
	{ path: "activities", component: Activities },
	{ path: "admin", component: AccopsAdmin },
	{ path: "profile/:id", component: Profile },
];

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Lockscreen />} />
					<Route path="/home" element={<Home />} />
					<Route path="/accops/login" element={<AccopsLogin />} />
					// Routes of accops with protected route
					<Route
						path="/accops"
						element={
							<ProtectedRoute>
								<AccopsLayout />
							</ProtectedRoute>
						}>
						{protectedRoutes.map(({ path, component: Component }) => (
							<Route key={path} path={path} element={<Component />} />
						))}
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
			<Footer />
			<Toaster />
		</Router>
	);
};

export default App;
