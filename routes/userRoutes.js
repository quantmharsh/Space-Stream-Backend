import  express from "express";
import { signupUser , loginUser , logoutUser , followUnfollowUser , updateUser  , getUserProfile} from "../controllers/userController.js";
const router= express.Router();
import protectRoute from  "../middlewares/protectRoute.js"


// Route :1 for signup

router.post("/signup" , signupUser)
router.post("/login" , loginUser)
router.post("/logout",logoutUser)
// protectRoute is  a middleware which we are using to check whether user is logged in or not to perform particular task

router.post("/follow/:id" , protectRoute, followUnfollowUser)
router.post("/update/:id" , protectRoute, updateUser)
router.get("/profile/:username" , getUserProfile)
export default router;
