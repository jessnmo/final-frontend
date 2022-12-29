import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavBar = () => {
	return (
		<Nav className="nav">
			<Link to="/home">Habit Tracker</Link>
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
	gap: 2rem;
	padding: 1rem;
`;

export const Ul = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	gap: 1rem;
`;

export const AnchorLink = styled.a`
	color: inherit;
	text-decoration: none;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0.25rem;
`;

/* export const HomeLink = styled.Link`
	list-style: none;
`;
 */
export default NavBar;
