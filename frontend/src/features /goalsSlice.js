import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

//const url = 'localhost:8080/goals';
export const getGoals = createAsyncThunk(
	'goals/get',
	async (thunkAPI) => {
		try {
			const response = await Axios.get('/goals');
			return response.data;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response.data);
		}
	}
	/* () => {
		return fetch(url)
			.then((res) => res.json())
			.catch((error) => console.log(error));
	} */
);

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
		[getGoals.pending]: (state) => {
			if (state.loading === 'idle') {
				state.loading = 'pending';
			}
		},
		[getGoals.fulfilled]: (state, action) => {
			console.log(action);
			if (state.loading === 'pending') {
				state.loading = 'idle';
				state.getGoals = action.payload;
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
