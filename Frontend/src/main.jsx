import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/auth.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<App />
			</AuthProvider>
		</Provider>
		<SpeedInsights />
	</StrictMode>
);
