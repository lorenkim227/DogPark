// app.js

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

app.get('/reservation', require('./controller/ReservationController').getAll);
app.get('/reservation/:id', require('./controller/ReservationController').get);
app.post('/reservation', require('./controller/ReservationController').postCreateUpdate);
app.post('/updatereservation', require('./controller/ReservationController').postCreateUpdate);
app.put('/reservation', require('./controller/ReservationController').postCreateUpdate);
app.delete('/reservation/:id', require('./controller/ReservationController').getDelete);
app.get('/deletereservation/:id', require('./controller/ReservationController').getDelete);

exports.app = app; 