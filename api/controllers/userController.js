import User from "../models/User.js";


export const registerController = async (req, res, next) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    await newUser.save().catch(
        err => next(err)
    )

    res.status(200).send("User has been created")
}