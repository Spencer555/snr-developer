const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register')
const login = require('./controllers/login')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.DBPORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});

console.log(process.env.PORT)

app.use(bodyParser.json());
app.use(cors());



app.listen(process.env.PORT, () => console.log(`app is running on port ${process.env.PORT}`));


// // home page
app.get('/', (req, res) => db.select('*').from('users').then(response => res.json(response)))

// // signin 
app.post('/signin', (req, res) => {login.handleLogin(req, res, db, bcrypt)})

// // register 
// // this is what we call dependency injection
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

// // profile
app.get('/profile/:id', (req, res) => profile.handleProfile(req, res, db))

// // image - update user to increase entry count anytime they submit an image 
app.put('/image', (req, res) => image.handleImage(req, res, db))

// // image url - upload the image to be processed by clarafai 
app.post('/imageurl', (req, res) => image.handleApi(req, res))



// planing your api
// /--> res  = GET this is working
// /signin --> = POST - success/fail
//  /register --> = POST - user
//  /profile/:userId --> = GET - user
// /image --> PUT  --> updatedUserObject 

