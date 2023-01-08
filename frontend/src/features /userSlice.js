import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initUserState = {
	loggedInUser: null, //store input
	registerState: {
		loading: 'idle',
		error: null,
		currentRequestId: undefined, //not sending multiple requests at the same time
	},
	//loginState:
};

export const registerUser = createAsyncThunk(
	'user/register',
	async (userInfo, thunkAPI) => {
		//error handling, loading state of registerState is pending
		//request ID thunk API generates has to be the same that's in the registerState
		const { loading, currentRequestId } =
			thunkAPI.getState().user.registerState;
		if (loading !== 'pending' || thunkAPI.requestId !== currentRequestId) {
			return;
		}

		try {
			const response = await axios.post('user/register', userInfo);
			return response.data;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response.data);
		}
	}
);

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
	extraReducers: {
		[registerUser.pending]: (state, action) => {
			const { registerState } = state; // destructuring registerState from the state
			if (registerState === 'idle') {
				registerState.loading = 'pending';
				registerState.currentRequestId = action.meta.requestId;
			}
		},
		[registerUser.fulfilled]: (state, action) => {
			const { registerState } = state; // destructuring registerState from the state
			if (registerState === 'pending') {
				registerState.loading = 'idle';
				registerState.currentRequestId = undefined;
				registerState.error = null;
				state.loggedInUser = action.payload;
			}
		},
		[registerUser.rejected]: (state, action) => {
			const { registerState } = state; // destructuring registerState from the state
			if (registerState === 'pending') {
				registerState.loading = 'idle'; //even the action is rejected, the loading is finished
				registerState.currentRequestId = undefined;
				registerState.error = action.payload;
			}
		},
	},
});

//const { addUsername, addEmail, addUserId } = userSlice.actions;
export default userSlice.reducer;
