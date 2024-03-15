import express from "express";
import { createPost ,getPost  ,deletePost , likeUnlikePost ,replyPost , getFeedPost} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";
const router= express.Router();
router.post("/create" ,protectRoute,createPost);
router.get("/:id" ,getPost);
router.delete("/:id" , protectRoute ,deletePost)
router.post("/like/:id" ,protectRoute , likeUnlikePost)
router.post("/reply/:id" ,protectRoute , replyPost)
router.get("/feed" ,protectRoute , getFeedPost)
export default router;