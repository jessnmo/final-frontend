import styled from 'styled-components';
import Goals from './Goals';

const GridContainer = styled.div`
	display: grid;
	height: 100vh;
	grid-template-areas:
		'nav'
		'main';
	grid-template-columns: 30% 70%;
	grid-template-rows: 1fr;
`;

const NavContainer = styled.div`
	grid-area: 'nav';
	background-color: #8aa77d;
	padding-top: 2rem;
	padding-left: 100px;
`;

const MainContainer = styled.div`
	grid-area: 'main';
	padding-top: 2rem;
	padding-right: 100px;
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const HeaderItem = styled.div`
	padding-right: 50px;
	:last-child {
		padding: 0;
	}
	color: #616b25;
	font-size: 1rem;
	&:hover,
	&:focus {
		color: #8bd42d;
	}
	&:active {
		color: #8bd42d;
	}
`;
const MyHabitsDesktop = () => {
	return (
		<>
			<GridContainer>
				<NavContainer>
					<Goals />
				</NavContainer>
				<MainContainer>
					<HeaderContainer>
						<HeaderItem>My Habits</HeaderItem>
						<HeaderItem>Dashboard</HeaderItem>
						<HeaderItem>Log Out</HeaderItem>
					</HeaderContainer>
				</MainContainer>
			</GridContainer>
		</>
	);
};

export default MyHabitsDesktop;
