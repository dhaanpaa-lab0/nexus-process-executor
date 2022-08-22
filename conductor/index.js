import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { config } from 'dotenv-defaults';
import { getUniqueId } from './utilities.js';

config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server Id ....................... ${getUniqueId()}`);
  console.log(`Conductor API Access port ....... ${port}`);
});
