import express from "express";
const router = express.Router();

import { registerUser, loginUser } from "../controllers/user.controllers.js";
import { getLordHuron } from "../controllers/song.controllers.js";

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/allSongs/lordHuron", getLordHuron);

export default router;
