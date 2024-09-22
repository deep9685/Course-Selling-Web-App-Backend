import mongoose, { Schema } from "mongoose";

const purchaseSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'courseModel'
    }
})

export const purchaseModel = mongoose.model("purchase", purchaseSchema);