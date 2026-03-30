// app.js

const userCont = require('./controller/UserController');
const e = require('express');
const express = require('express');
const { mongo } = require('mongoose');
const morgan = require('morgan');

const app = express(); 

app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('public_html') ); // Static page server will use the folder 'public_html'

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret:'banana apples', // need to add to .env later
    resave: false, // do not save session if not modified
    saveUninitialized: false, // do not save empty session
    cookie: { maxAge: 1000*60*60*24 }, // 1000 ms * 60 sec * 60 min * 24 hr = 1 day for cookie exp
    store: mongostore.create({
        mongoUrl: process.env.DB_URI,
        ttl: 60*60*24*7 // 7 day for session exp

    })
}));

app.get('/user', userCont.getAll);
app.get('/user/:id', userCont.get);
app.post('/user', userCont.postCreateUpdate);
app.post('/updateuser', userCont.postCreateUpdate);
app.put('/user', userCont.postCreateUpdate);
app.delete('/user/:id', userCont.getDelete);
app.get('/deleteuser/:id', userCont.getDelete);
app.post('/dologin', userCont.postLogin);

app.get('/reservation', require('./controller/ReservationController').getAll);
app.get('/reservation/:id', require('./controller/ReservationController').get);
app.post('/reservation', require('./controller/ReservationController').postCreateUpdate);
app.post('/updatereservation', require('./controller/ReservationController').postCreateUpdate);
app.put('/reservation', require('./controller/ReservationController').postCreateUpdate);
app.delete('/reservation/:id', require('./controller/ReservationController').getDelete);
app.get('/deletereservation/:id', require('./controller/ReservationController').getDelete);

exports.app = app; 