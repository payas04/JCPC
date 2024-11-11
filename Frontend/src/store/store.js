import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import profilesSlice from "./profilesSlice";

const store = configureStore({
	reducer: {
		profile: profilesSlice,
		user: userSlice,
	},
});

export default store;
