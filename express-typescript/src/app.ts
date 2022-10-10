import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

require('./routes')(app);

const port = process.env.PORT || 3000;

app.get(['/', '/ping'], (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
app.use(function (err, req, res, next) {
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({ error: err.message });
});
// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use(function (req, res) {
  res.status(404);
  res.send({ error: "Sorry, can't find that" });
});
