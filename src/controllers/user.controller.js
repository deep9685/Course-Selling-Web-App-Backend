import { AsyncHandler } from "../utils/AsyncHandler.js";
import { UserModel } from "../models/user.model.js";


const registerUser = AsyncHandler(async (req,rs) => {

});

const loginUser = AsyncHandler(async (req, res) => {

});

const logOutUser = AsyncHandler(async (req, res) => {

});

const allCourses = AsyncHandler(async (req,res) => {

});

const buyCourse = AsyncHandler(async (req, res) => {

});

const purchasedCourse = AsyncHandler(async (req, res) => {

});

export {
    registerUser,
    loginUser,
    logOutUser,
    allCourses,
    buyCourse,
    purchasedCourse
}