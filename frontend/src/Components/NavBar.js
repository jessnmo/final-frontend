import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavBar = () => {
	return (
		<Nav className="nav">
			<Link to="/home" style={linkStyle}>
				Habit Tracker
			</Link>
			<Ul>
				<li>
					<AnchorLink href="/home">Home</AnchorLink>
				</li>
				<li>
					<AnchorLink href="/about">About</AnchorLink>
				</li>
				<li>
					<AnchorLink href="/login">Log In</AnchorLink>
				</li>
			</Ul>
		</Nav>
	);
};

export const Nav = styled.div`
	background-color: #b9c6b9;
	color: #04363d;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	padding: 1rem 2rem;
`;

export const Ul = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	gap: 1rem;
	font-weight: bold;
`;

export const AnchorLink = styled.a`
	color: inherit;
	text-decoration: none;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0.25rem;
	&:hover,
	&:focus {
		color: palevioletred;
	}
	&:active {
		color: red;
	}
`;

const linkStyle = {
	margin: '1rem',
	textDecoration: 'none',
	color: '#04363d',
	fontSize: '2rem',
};
export default NavBar;
