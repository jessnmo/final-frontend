import { createSlice } from '@reduxjs/toolkit';

const initUserState = {
	loginUser: null, //store input
	signupState: {
		loading: 'idle',
		error: null,
		currentRequestId: undefined, //not sending multiple requests at the same time
	},
	//loginState:
};

const userSlice = createSlice({
	name: 'user',
	initialState: initUserState,
	reducers: {
		/* 	addUsername: (state, action) => {
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
		}, */
	},
	extraReducers: {},
});

//const { addUsername, addEmail, addUserId } = userSlice.actions;
export default userSlice.reducer;
