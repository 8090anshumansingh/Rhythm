import express from "express";
const router = express.Router();

import { registerUser, loginUser } from "../controllers/user.controllers.js";

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

export default router;
