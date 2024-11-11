import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
	name: "profile",
	initialState: { profiles: {} },
	reducers: {
		setAllProfiles: (state, action) => {
			state.profiles = action.payload;
		},
	},
});

export const { setAllProfiles } = profilesSlice.actions;

export default profilesSlice.reducer;
