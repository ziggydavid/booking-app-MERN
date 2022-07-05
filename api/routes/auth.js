import express from "express";
import {registerController} from "../controllers/userController.js";
   

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is the Auth API")
})

router.post("/register", registerController)



export default router