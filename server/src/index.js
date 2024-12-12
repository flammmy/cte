require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require("express-session");
const authRoutes = require('../routes/auth');
const passportStrategy = require("../utils/passport");

const app = express();

app.use(
    session({
      secret: "flammy", 
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, 
      },
    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const PORT = 4000;
app.use('/auth', authRoutes);
app.get('/',(req, res) =>{
    res.json({message: 'Server is up and running'})
})
app.listen(PORT, ()=> console.log('listening on port->;',PORT));