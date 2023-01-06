import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

//const url = 'localhost:8080/goals';
/* export const getGoals = createAsyncThunk(
	'goals/getGoals',
	/* async (thunkAPI) => {
		try {
			const response = await axios.get('/goals');
			return response.data;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response.data);
		}
	} */
/* async () => {
		return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
			res.json()
		);
	} */
//); */

const initialGoalState = {
	goalsList: [],
	status: null,
	error: null,
};

const goalsSlice = createSlice({
	name: 'goals',
	initialState: initialGoalState,
	reducers: {
		addGoals: (state, action) => {
			//state.goalsList = [...action.payload]
			state.goalsList.push(action.payload);
		},
		deleteGoal: (state, action) => {
			state.goalsList.splice(action.payload, 1);
		},
	},
	/* extraReducers: {
		[getGoals.pending]: (state) => {
			state.status = 'loading';
		},
		[getGoals.fulfilled]: (state, { payload }) => {
			console.log(payload);
			state.goalsList = payload;
			state.status = 'success';
		},
		[getGoals.rejected]: (state) => {
			state.status = 'failed';
		},
	}, */
});

const { addGoals, deleteGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
