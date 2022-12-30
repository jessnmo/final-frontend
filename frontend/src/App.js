//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import NavBar from './Components/NavBar';
import Home from './Components/Home';
//import Login from './Components/Login';
import MyHabits from './Components/MyHabits';

const App = () => {
	return (
		<BrowserRouter>
			{/* <NavBar /> */}
			<Routes>
				<Route path="/home" element={<Home />} exact={true} />
				<Route path="/habits" element={<MyHabits />} exact={true} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
