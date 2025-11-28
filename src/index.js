import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

const app = express();
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log(`Listening on port: ${port}`);
});
