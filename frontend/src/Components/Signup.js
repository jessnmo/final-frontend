import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { registerUser } from '../features /userSlice';
import { useDispatch } from 'react-redux';

const UserInfoContainer = styled.div`
	padding-top: 1rem;
`;

const PageTitle = styled.div`
	font-size: 30px;
	padding-bottom: 30px;
	padding-left: 100px;
	color: #616b25;
`;

const UserActionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FormTitle = styled.div`
	font-size: 30px;
	padding-bottom: 2rem;
	color: #616b25;
`;

const FormContainer = styled.div`
	justify-content: center;
	width: 30%;
`;

const InputSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	justify-content: space-around;
	label {
		margin-bottom: 10px;
		color: #616b25;
	}
	input {
		margin-bottom: 2rem;
		padding: 8px;
		border: 2px solid #8bd42d;
		border-radius: 10px;
		:focus {
			outline: red;
			border: none;
		}
	}
`;

const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Button = styled.div`
	padding: 8px 10px 8px 10px;
	background-color: #616b25;
	color: whitesmoke;
	border: none;
	border-radius: 25px;
	&:hover {
		opacity: 80%;
	}
	cursor: pointer;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #616b25;
	&:hover {
		color: #8bd42d;
	}
`;

const Signup = () => {
	/* const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState(''); */

	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
	});

	//const userState = useSelector((state) => state.user);
	const handleUserInfoChange = (e) => {
		const { id, value } = e.target;
		setUserInfo((currentState) => ({
			...currentState,
			[id]: value,
		}));
	};

	const dispatch = useDispatch();

	const handleSubmit = () => {
		dispatch(registerUser(userInfo));
	};

	return (
		<UserInfoContainer>
			<PageTitle>That's so Fetch</PageTitle>
			<UserActionContainer>
				<FormTitle>Register to continue</FormTitle>
				<FormContainer>
					<InputSection>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="username"
							required
							//value={username}
							//onChange={(e) => setUsername(e.target.value)}
							onChange={handleUserInfoChange}
						/>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							placeholder="email"
							required
							//value={email}
							//onChange={(e) => setEmail(e.target.value)}
							onChange={handleUserInfoChange}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="password"
							minLength="8"
							required
							//value={password}
							//onChange={(e) => setPassword(e.target.value)}
							onChange={handleUserInfoChange}
						/>
					</InputSection>
					<BtnContainer>
						<Button type="submit" onClick={handleSubmit}>
							Register Now
						</Button>
					</BtnContainer>
				</FormContainer>
				<section>
					Already have an account? {''}
					<StyledLink to="/login">Log in here</StyledLink>
				</section>
			</UserActionContainer>
		</UserInfoContainer>
	);
};

export default Signup;
