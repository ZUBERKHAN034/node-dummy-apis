const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/get', (_req, res) => {
	console.log('GET request received', 'Hello World!');
	res.status(200).send({ status: 'success', message: 'Hello World!' });
});

app.post('/post', (req, res) => {
	console.log('POST request received', req.body);
	res.status(200).send({ status: 'success', message: req.body });
});

app.post('/postform', (req, res) => {
	console.log('POST request received', req.body);
	res
		.status(200)
		.send(JSON.stringify({ status: 'success', message: req.body }));
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
