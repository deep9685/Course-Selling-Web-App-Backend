import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price:{
        type: Number
    },
    imageUrl: {
        type: String
    },
    createrId:{
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }
})

export const courseModel = mongoose.model('course', courseSchema);