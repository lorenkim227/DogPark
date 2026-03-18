const userCont = require('./controller/UserController');
const e = require('express');
const express = require('express');
const morgan = require('morgan');
// Remaining code after the imports

const app = express(); 

app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('public_html') ); // Static page server will use the folder 'public_html'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/user', userCont.getAll);
app.get('/user/:id', userCont.get);
app.post('/user', userCont.postCreateUpdate);
app.post('/updateuser', userCont.postCreateUpdate);
app.put('/user', userCont.postCreateUpdate);
app.delete('/user/:id', userCont.getDelete);
app.get('/deleteuser/:id', userCont.getDelete);

exports.app = app; 