import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
	name: "profile",
	initialState: { profiles: [], loading: false, error: null },
	reducers: {
		fetchProfilesStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchProfilesSuccess: (state, action) => {
			state.loading = false;
			state.profiles = action.payload;
		},
		fetchProfilesFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchProfilesStart,
	fetchProfilesSuccess,
	fetchProfilesFailure,
} = profilesSlice.actions;

export default profilesSlice.reducer;
