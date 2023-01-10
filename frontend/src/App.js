import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MyHabits from './Components/MyHabits';
import Signup from './Components/Signup';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<Home />} exact={true} />
				<Route path="/habits" element={<MyHabits />} exact={true} />
				<Route path="/signup" element={<Signup />} exact={true} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
