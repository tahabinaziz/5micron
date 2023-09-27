const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello WOrd123333')
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})