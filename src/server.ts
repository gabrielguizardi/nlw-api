import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.listen(3333);
