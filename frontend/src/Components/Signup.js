import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
//import user from '../features /user';
/* import {
	addUsername,
	addEmail,
	addPassword,
	addAccessToken,
} from '../features /user'; */
//import userSlice from '../features/user';
//import { batch, useEffect, useDispatch } from 'react-redux';
//import { userNavigate } from 'react-router-dom';

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
	//const [error, setError] = useState(null);
	//const accessToken = useState((state) => state.user.accessToken);
	//const navigate = userNavigate();

	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleUserInput = (e) => {
		const { id, value } = e.target;
		setUserInfo((currentState) => ({
			...currentState,
			[id]: value,
		}));
	};
	/* 
	useEffect(() => {
		if (accessToken) {
			navigate('/habits');
		}
	}, [accessToken]);

	const dispatch = useDispatch();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const options = {
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		};

		fetch('https://project-auth-5ohdkk2c7a-uc.a.run.app/', options)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					batch(() => {
						dispatch(addUsername.data.res.username);
						dispatch(addEmail.data.res.email);
						dispatch(addPassword.data.res.password);
						dispatch(addAccessToken.data.res.accessToken);
						dispatch(catchError(null));
					});
				} else {
					batch(() => {
						dispatch(addUsername(null));
						dispatch(addEmail(null));
						dispatch(addPassword(null));
						dispatch(addAccessToken(null));
						dispatch(data.res);
						setCatchError(data.res);
					});
				}
			});
	}; */

	return (
		<UserInfoContainer>
			<PageTitle>Title</PageTitle>
			<UserActionContainer>
				<FormTitle>Signup to continue</FormTitle>
				<FormContainer>
					<InputSection>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="username"
							required
							onChange={handleUserInput}
						/>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							placeholder="email"
							required
							onChange={handleUserInput}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="password"
							minLength="8"
							required
							onChange={handleUserInput}
						/>
					</InputSection>
					<BtnContainer>
						<Button>Sign Up Now</Button>
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
