import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGoals } from '../features /goalsSlice';

const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
	color: #616b25;
	text-transform: capitalize;
	letter-spacing: 8px;
`;

const GoalsContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 50px;
`;

const GoalsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;

const AddBtn = styled.div`
	text-transform: capitalize;
	display: flex;
	align-items: center;
	color: #616b25;
	font-size: 14px;
	img {
		max-width: 16px;
		margin-right: 8px;
		opacity: 30%;
	}
`;

const GoalRow = styled.div`
	display: flex;
	justify-content: space-between;
	color: #616b25;
	align-items: center;
	margin-bottom: 50px;
	:last-child {
		margin-bottom: 0;
	}
	font: 1rem;
	&:hover,
	&:focus {
		color: #8bd42d;
	}
	&:active {
		color: #8bd42d;
	}
`;

const GoalName = styled.div`
	text-transform: uppercase;
`;

const Action = styled.div`
	display: flex;
	align-items: center;
	opacity: 30%;
	img {
		max-width: 20px;
		fill-opacity: 30%;
		margin-right: 8px;
		:last-child {
			margin: 0;
		}
	}
`;

const Goals = () => {
	const ListOfGoals = [
		{ id: 0, name: 'Goal 1' },
		{ id: 1, name: 'Goal 2' },
		{ id: 2, name: 'Goal 3' },
		{ id: 3, name: 'Goal 4' },
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGoals());
	}, [dispatch]);

	return (
		<GoalsContainer>
			<GoalsHeader>
				<Title>GOALS</Title>
				<AddBtn>
					<img src="images/plus.png" alt="add goal button" />
					ADD A GOAL
				</AddBtn>
			</GoalsHeader>
			{ListOfGoals.map((item) => {
				return (
					<GoalRow>
						<GoalName key={item.id}>{item.name}</GoalName>
						<Action>
							<img src="images/pen.png" alt="edit" />
							<img src="images/bin.png" alt="bin" />
						</Action>
					</GoalRow>
				);
			})}
		</GoalsContainer>
	);
};

export default Goals;
