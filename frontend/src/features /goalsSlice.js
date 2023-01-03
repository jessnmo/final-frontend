import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const getGoals = createAsyncThunk('goals/get', async () => {
	const response = await Axios.get('/goals');
	return response.data;
});

const initialGoalState = {
	goalsList: [],
	loading: 'idle',
	error: null,
};

const goalsSlice = createSlice({
	name: 'goals',
	initialState: initialGoalState,
	reducers: {},
	extraReducers: {
		[getGoals.pending]: (state, action) => {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		[getGoals.fulfilled]: (state, action) => {
			if (state.loading === 'pending') {
				state.loading = 'idle';
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
