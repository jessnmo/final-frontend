import { createSlice } from '@reduxjs/toolkit';

const initialGoalState = {
	goalsList: [],
	loading: 'idle',
	error: null,
};

const goalsSlice = createSlice({
	name: 'goals',
	initialState: initialGoalState,
	reducers: {},
	extraReducers: {},
});

export default goalsSlice;
