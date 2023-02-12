import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';
import routes from './routes';

dotenv.config();

const app = express();
app.use(routes);


app.get('/', (req, res) => {
	return res.json({ message: 'Nagoya' });
});

app.listen(3333, () => {
	console.log('🤖 Server started on port 3333!');
});