import express from 'express';

const app = express();

app.use(express.json());

app.get('/goals', (req, res) => {
	try {
		const ListOfGoals = [
			{ id: 0, name: 'Goal 1' },
			{ id: 1, name: 'Goal 2' },
			{ id: 2, name: 'Goal 3' },
			{ id: 3, name: 'Goal 4' },
		];
		res.send(ListOfGoals);
	} catch (error) {
		console.log('goals not found');
	}
});

app.listen(8080, () => {
	console.log('app listening at http://localhost:8080');
});
