
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router()

//Set up the express app
const app = express();

//log req to the console
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(morgan('dev'));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 3000;

const db = require('../db/db.js');

// router.route('/test').get((req,res)=>{
//   console.log('hi');
// })

app.get('/', (req,res)=>{
  console.log('we got here');
   res.send('Hello World!')
});



const server = app.listen(PORT, () => {
  console.log('Listening in on port ', PORT)
});