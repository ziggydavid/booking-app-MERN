import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, this is the Auth API")
})

router.get("/register",(req, res) => {
    res.send("Register API")
})

export default router