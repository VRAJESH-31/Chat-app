import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { getmessages, getUsersForSidebar, sendMessage } from '../controllers/message.controller.js';
const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/send/:id", protectRoute, sendMessage);
router.get("/:Id", protectRoute, getmessages);



export default router;