import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config()

const app = express()


const connect = async () => {
    const connection = await mongoose.connect(process.env.MONGODB).
    catch(error => {
        console.log(error)
    });
    console.log(`DB connected on this ${connection.connection.host}`)
}


mongoose.connection.on('connected', () => {
    console.log("Connected")
  });

mongoose.connection.on('disconnected', () => {
    console.log("Disconnected")
  });

app.get('/', (req,res) => {
    res.send("Hello Welcome")
})


app.listen(5000, () => {
    connect()
    console.log("Connected to server")
})