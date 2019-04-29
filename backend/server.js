import express from 'express';
import urlRoutes from './routes/event.route';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT,DELETE, OPTIONS');
  next();
});

app.use('/api/url', urlRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
