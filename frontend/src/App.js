//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import NavBar from './Components/NavBar';
import Home from './Components/Home';
//import Login from './Components/Login';
import MyHabits from './Components/MyHabits';
//import goalsSlice from './features /goalsSlice';
//import { configureStore, combineReducers } from '@reduxjs/toolkit';
//import { Provider } from 'react-redux';
import Signup from './Components/Signup';

/* const reducers = combineReducers({
	goals: goalsSlice.reducer,
});

const store = configureStore({ reducers });
 */
const App = () => {
	return (
		//<Provider store={store}>
		<BrowserRouter>
			{/* <NavBar /> */}
			<Routes>
				<Route path="/home" element={<Home />} exact={true} />
				<Route path="/habits" element={<MyHabits />} exact={true} />
				<Route path="/signup" element={<Signup />} exact={true} />
			</Routes>
		</BrowserRouter>
		//</Provider>
	);
};

export default App;
