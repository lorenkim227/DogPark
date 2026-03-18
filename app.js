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
app.get('/user/:id', userCont.getById);
app.post('/user', userCont.postCreateOrUpdate);
app.post('/updateuser', userCont.postCreateOrUpdate);
app.put('/user', userCont.postCreateOrUpdate);
app.delete('/user/:id', userCont.remove);
app.get('/deleteuser/:id', userCont.remove);

exports.app = app; 