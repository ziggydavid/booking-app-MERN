import express from "express";
import {loginController, registerController} from "../controllers/authController.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is the Auth API")
})

router.post("/register", registerController);
router.post('/login', loginController);



export default router