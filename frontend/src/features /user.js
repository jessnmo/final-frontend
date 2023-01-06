import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userId: null,
		username: null,
		email: null,
		accessToken: null,
		error: null,
	},
	reducers: {
		addUsername: (state, action) => {
			state.username = action.payload;
		},
		addEmail: (state, action) => {
			state.username = action.payload;
		},
		addUserId: (state, action) => {
			state.userId = action.payload;
		},
		addAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		catchError: (state, action) => {
			state.error = action.payload;
		},
		logOut: (state, action) => {
			state.accessToken = null;
			state.username = null;
			state.email = null;
			state.userId = null;
		},
	},
});
