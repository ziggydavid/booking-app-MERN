import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createErr } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const registerController = async (req, res, next) => {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })
    await newUser.save().catch(
        err => next(err)
    )

    res.status(200).send("User has been created")
}


export const loginController = async (req, res, next) => {
    let user = null;
    try {
        user = await User.findOne({username:req.body.username})
        if(!user) {
            try{
               user =  await User.findOne({email:req.body.username})
        }catch (err){
            next(err)
        }
    }
    }
    catch (err){
        next(err);
    }
    if (!user) return next(createErr(404, "This account does not exist"))
   

    const passwordCorrect = bcrypt.compareSync(req.body.password, user.password)
    if(!passwordCorrect) return(next(createErr(400,"Wrong user Credentials")))

    const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.SECRET_KEY)
    const {password, isAdmin, ...otherDetails } = user._doc

    res.cookie("access_token", token, {
        httpOnly: true,
    }).status(200).json(otherDetails)
}

