const express = require('express');
let axios = require('axios');
var app = express();
const ExpressError= require('./expressError');
const { resolve } = require('path');
const { rejects } = require('assert');
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let results = req.body.developers.map(async (d)=> {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    // let url ="https://api.github.com/users"
    // let results = req.body.developers.map(d =>{ 
    //   return new Promise(resolve,rejects) =>{
    //     return resolve = await axios.get(url)
    //   }}
    //   )
    

    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
    // return res.json(out);
  } catch {
    next(err);
  }
  
  // let resp = await axios.get('https://api.github.com/users')
  // return res.json(resp)
});
app.get('/',function(req,res,next){
  try{
    return res.json({developers:"someting"})
  }catch(err){
    return next(err)
  }
  
})

//general error handler
app.use((err,req,res,next)=>{
  res.status(err.status ||500);
  return res.json({
    error:err,
    msg:err.msg
  });
})

app.listen(3000,function(req,res,next){
  console.log("Server is running on port 3000")
});
