//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
