import styled from 'styled-components';
import MyHabitsDesktop from './MyHabitsDesktop';

//at 992px DesktopContainer will be hidden
const DesktopContainer = styled.div`
	@media only screen and (max-width: 992px) {
		display: none;
	}
`;

const MobileContainer = styled.div`
	@media only screen and (min-width: 993px) {
		display: none;
	}
`;

const MyHabits = () => {
	return (
		<>
			<DesktopContainer>
				<MyHabitsDesktop />
			</DesktopContainer>
			<MobileContainer>mobile</MobileContainer>
		</>
	);
};

export default MyHabits;
