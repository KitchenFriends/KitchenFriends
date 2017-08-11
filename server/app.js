import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

const db = require('../db/db.js');

const server = app.listen(PORT, () => {
  console.log('Listening in on port 3000')
});