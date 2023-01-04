//import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

/* const url = 'localhost:8080/goals';
export const getGoals = createAsyncThunk(
	'goals/get', */
/* async (thunkAPI) => {
		try {
			const response = await axios.get('/goals');
			return response.data;
		} catch (error) {
			const { rejectWithValue } = thunkAPI;
			return rejectWithValue(error.response.data);
		}
	} */
/* () => {
		return fetch(url)
			.then((res) => res.json())
			.catch((error) => console.log(error));
	}
);

const initialGoalState = {
	goalsList: [],
	isLoading: true,
	error: null,
};

const goalsSlice = createSlice({
	name: 'goals',
	initialState: initialGoalState,
	reducers: {},
	extraReducers: {
		[getGoals.pending]: (state) => {
			state.isLoading = true;
		},
		[getGoals.fulfilled]: (state, action) => {
			console.log(action);
			state.isLoading = false;
			state.getGoals = action.payload;
		},
		[getGoals.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default goalsSlice.reducer; */
