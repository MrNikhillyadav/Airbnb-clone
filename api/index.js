// install express, cors, mongoose, mongodb, dotenv, bcrypt.js

const express = require('express')
const app = express()
var cors = require('cors')
const mongoose = require('mongoose');
//to protect our password we use dotenv 
require('dotenv').config()
const User = require('./models/user') // access the model or schema we created
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const jwtSecrete = 'shdcnwefi3a2gnskqjdfjdjoijwoifj34' // random secrete string 

//to parse data in json....
app.use(express.json()); 
//for reading cookies....
app.use(cookieParser())

app.use(cors({
    credentials : true,
    origin : 'http://localhost:5173',
}));


//mongo_url me mongodb se code daal h and password bhi 
//included h joki .env file me save h for protection
mongoose.connect(process.env.MONGO_URL); 


app.get('/test', (req, res) => {
    res.json('test successfull');
  })

// setting endpoint to grab register info from register form.
// async function and await keyword use krna jaroori h.
app.post('/register',async (req, res) => {
  const {email, name, password} = req.body;

  try{
    const userDoc = await User.create({
      name,
      email,
      password :bcrypt.hashSync(password, bcryptSalt),
      
    });
    res.json({userDoc});
  }
  catch(e){
    res.status(422).json(e);
  }
  })

  app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    //Now to find user of this email,
    const userDoc =  await User.findOne({email})  // Note : this "User" is the User Model we've created;
    if(userDoc){
      // res.json('found');
      // if user if found, we want to check if his password is correct ?
      const passOk =  bcrypt.compareSync(password, userDoc.password); 
      if(passOk){
        // password correct, we want to login user , actually, create a JSON webtoken and 
        // respond with a cookie and encrypted username using json webtoken sign method();
        jwt.sign({
            email: userDoc.email,
            id: userDoc._id,
            // name : userDoc.name, using other method to grab name i.e. by  findById() method in /profile route directly.
          },jwtSecrete, {}, (err, token) => {
          if(err) throw err;
          //otherwise respond with a token
          res.cookie('token', token).json(userDoc);
        }  )
      }else{
        res.status(422).json('wrong password!')
      }
    }else{
      res.json(' user not found');
    }
  })


  app.get('/profile', (req,res) => {
    //check if there is a header request cookie sent or not. if yes then continue...
    //..grab the token from the response.cookies
    const {token} = req.cookies;
    //check if we have token, then  we try to decrypt the token with our saltkey, otherwise throw null
    if(token){
      jwt.verify(token,jwtSecrete,{}, async(err, cookieData) =>{
        if(err) throw err;
        const {name, email,id} = await User.findById(cookieData.id)
      //  res.json(cookieData)  // responding with 'user' data in json format,  which we have here in jwt.sign() i.e. email, id .
       //Now we will go to userContext and grab the data from the response.

       res.json({name, email, id}); // updating above code: sending only name, email,id as object. ***Vide: 1:47:40 ***
      });
    }else {
      res.json(null);
    }
  })

  //note there is the post request for logout.
  app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
  })

  app.listen(4000);
 