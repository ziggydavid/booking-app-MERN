import express from "express";
import Lodge from "../models/Lodge.js"
import {updateLodge,createLodge,deleteLodge, getLodges } from "../controllers/lodgeController.js";
import { getLodge } from "../controllers/lodgeController.js";




const router = express.Router()


//get all
router.get('/', getLodges)
//get
router.get('/:id', getLodge)
//create
router.post("/", createLodge)
//update
router.put('/:id', updateLodge)
//Delete
router.delete('/:id', deleteLodge)


//another way of handling async calls
/*
router.post("/", async (req, res) => {
    const newLodge = new Lodge(req.body)

    try{
        const savedLodge = await newLodge.save() 
        res.status(200).json(savedLodge)
    }catch(err){
        res.status(500).json(err)
    }
})*/

export default router