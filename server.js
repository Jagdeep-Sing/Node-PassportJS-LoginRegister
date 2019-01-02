const express = require('express');
const path = require('path');
const cookeParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');



const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/passport', {
    useNewUrlParser: true
});

app.get('/', (req, res) => {
  res.send('CONNECTED');
});

app.listen(PORT, function(){
  console.log('Server is running on',PORT);
});