import { Router } from "express";
const router = Router();

import { registerAdmin,
         loginAdmin,
         logOutAdmin,
         createCourse,
         uploadCourseContent,
         deleteCousrse   
 } from "../controllers/admin.controller.js";  

router.route('/signup').post(registerAdmin);
router.route('/signin').post(loginAdmin);
router.route('/logout').post(logOutAdmin);
router.route('/create-course').post(createCourse);
router.route('/upload-content').post(uploadCourseContent);
router.route('/delete-course/:id').delete(deleteCousrse);

export default router;