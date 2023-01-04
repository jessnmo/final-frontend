import styled from 'styled-components';

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

const Signup = () => {
	return (
		<UserInfoContainer>
			<PageTitle>Title</PageTitle>
			<UserActionContainer>
				<FormTitle>Signup to continue</FormTitle>
				<FormContainer>
					<InputSection>
						<label htmlFor="username">Username</label>
						<input type="text" id="username" placeholder="username" />
						<label htmlFor="email">Email</label>
						<input type="text" id="email" placeholder="email" />
						<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="password" />
					</InputSection>
				</FormContainer>
			</UserActionContainer>
		</UserInfoContainer>
	);
};

export default Signup;
