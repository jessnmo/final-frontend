import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGoals = createAsyncThunk('goals/getGoals', async (thunkAPI) => {
	//returns redux thunk action creator. returns a function instead of an action
	try {
		const response = await axios.get('/goals');
		return response.data;
	} catch (error) {
		const { rejectWithValue } = thunkAPI;
		return rejectWithValue(error.response.data);
	}
});

const initGoalState = {
	goalsList: [],
	loading: 'idle',
	error: null,
};

const goalsSlice = createSlice({
	name: 'goals',
	initialState: initGoalState,
	reducers: {},
	extraReducers: {
		[getGoals.pending]: (state, action) => {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		[getGoals.fulfilled]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle'; //request is finished
				state.goalsList = action.payload;
			}
		},
		[getGoals.rejected]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle';
				state.error = action.error;
			}
		},
	},
});

export default goalsSlice.reducer;
