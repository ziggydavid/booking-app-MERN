import Room from "../models/Room";
import Lodge from "../models/Lodge";

export const createRoom = async (req, res, next) => {
    const lodge = req.body.lodgeId
    const newRoom = await new Room(req.body).save()
    const savedRoom = await Lodge.findByIdAndUpdate(lodge,{
        $push:{rooms:newRoom._id}
     })
    .catch(err => {
        next(err)
    })
    res.status(200).json(savedRoom)
    .catch(err => next(err))
}

export const updateRoom = async (req, res, next) => {
    const room = await Room.findByIdAndUpdate(req.params.id, {
        $set: req.body
        
    },{new:true}).catch(err => next(err))
    res.status(200).json(room)
}


export const deleteRoom = async (req, res, next) => {
    await Room.findByIdAndDelete(req.body.id)
    .catch(err => next(err))
    res.status(200).json("Room Successfully Deleted")
}

export const getRoom = async (req, res, next) => {
    const room = await Room.findOne({id:req.params.id})
    .catch(err => next(err) )

    res.status(200).json(room)
}
export const getRooms = async (req, res, next) => {
    const rooms = await Room.find().catch(err => next(err))
    res.status(200).json(rooms)
}