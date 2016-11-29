// app modules
import express from 'express';


const app = express();

import bodyParser from 'body-parser';

const router = express.Router();

// configure app to use the bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the app port
const port = process.env.PORT || 8080;


// Use our router
router.get('/', (req, res) => {
  res.json({ message: 'Welcome buddy, you got me!' });
});

// Register routes
app.use('/', router);

// start the server
app.listen(port);

// eslint-disable-next-line
console.log(`Hey come on! find me here => localhost:${port}`);

// expose the server to supertest
// export default app;
