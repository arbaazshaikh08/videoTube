import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addComment,
  deleteComment,
  getVideoComments,
  updateComment,
} from "../controllers/comment.controller.js";

const router = Router();

router.route("/addcomments/videoId/:videoId").post(verifyJWT, addComment);
router.route("/update-comments/:commentId").post(verifyJWT, updateComment);
router.route("/video-comments/:videoId").get(verifyJWT, getVideoComments);
router.route("/delete-comment/:commentId").delete(verifyJWT, deleteComment);

export default router;