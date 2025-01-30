const express = require('express');
const router = express.Router();
const first = require('../models/first')


router.get('/',(req,res)=>{
    res.json('first router')
});

router.post('/', (req,res)=>{
    const {name}= req.body;
    if(name){
        const data = new first({name})
       console.log(name) 
       data.save();
       res.json({name})
    }
    
    
})


module.exports = router;