const http = require("http") ;
const bodyparser = require("body-parser") ; 
const express= require("express"); 
const dotenv= require("dotenv").config(); // dotenv -> Database connections, put all your secret things,
const cors= require("cors"); // database request , fetching is done by this 
//const sendEmail = require("./utils/sendEmail"); // Correctly import sendEmail
const mongoose = require("mongoose");

const app = express(); 

const PORT= process.env.PORT || 5000 ; 

app.use(express.json()); 
app.use(bodyparser.json());
app.use(cors());

mongoose
    .connect(process.env.uri)
    .then(()=> {
        app.listen(PORT, () =>{
            console.log(`Server Running on the port ${PORT}`)
        }) ; 
    })
    .catch((err)=> { console.log(err); }); 
