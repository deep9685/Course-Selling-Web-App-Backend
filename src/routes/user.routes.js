import { Router } from "express";

const router = Router();

import { registerUser,
         loginUser,
         logOutUser,
         allCourses,
         buyCourse,
         purchasedCourse   
 } from "../controllers/user.controller.js";   

router.route('/signup').post(registerUser);
router.route('/signin').post(loginUser);
router.route('/logout').post(logOutUser);
router.route('/all-course').get(allCourses);
router.route('/purchase/:id').post(buyCourse);
router.route('/user-course').get(purchasedCourse);

export default router;