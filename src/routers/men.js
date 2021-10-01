const express = require("express");
const router = new express.Router();
const Olympicsdata = require("../models/mens");

router.post("/mens",async(req,res)=>{
    try{
        const mensrecords = new Olympicsdata(req.body);
        console.log(mensrecords)
        const result = await mensrecords.save() 
        res.status(201).send(result);
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/mens",async(req,res)=>{
    try{
        const result = await Olympicsdata.find();
        res.send(result);
    }catch(e){
        res.status(400).send(e)
    }
})

router.get("/mens/:id", async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(_id)
        const result = await Olympicsdata.findById(_id)
        console.log(result)
        if(!result){
            res.status(404).send()
        }else{
            res.send(result);
        }
    }catch(e){
        res.status(500).send(e)
        console.log(e)
    }
})

router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(_id);
        const result = await Olympicsdata.findByIdAndUpdate(_id, req.body,{
            new : true
        } )
        res.send(result)
        console.log(result)
    }catch(e){
        res.status(404).send(e)
    }
})

router.delete("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(_id);
        const result = await Olympicsdata.findByIdAndDelete(_id);
        console.log(result)
        if(!result){
            res.status(404).send()
        }else{
            res.send(result)
        }
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router