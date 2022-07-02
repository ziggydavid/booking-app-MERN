import mongoose from 'mongoose';
const { Schema } = mongoose;

const authSchema = new Schema({
  name:{
    type: String,
    trim: true,
    required: true
},

email:{
    type:String,
    trim: true,
    required: true
}
});