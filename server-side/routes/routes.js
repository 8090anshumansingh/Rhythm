import express from "express";
const router = express.Router();

import { registerUser, loginUser } from "../controllers/user.controllers.js";
import {
  getLordHuron,
  getHindiSongs,
  getDecadeBest,
  getYearBest,
  getMix1,
  getMix3,
  getMix5,
  getHimym,
  getKK,
  getRecommends,
  getDarshan,
  getSheeran,
  getTwilight,
  createLord,
  getAll,
  giveId,
} from "../controllers/song.controllers.js";
import { likeSong,getAllLiked,dislikeSong} from "../controllers/user.controllers.js";

router.post("/create/lord", createLord);
router.post("/giveId", giveId);
router.post("/likeSong", likeSong);
router.post("/dislikeSong", dislikeSong);
router.post("/getAllLiked", getAllLiked);
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/allSongs/lordHuron", getLordHuron);
router.get("/allSongs", getAll);
router.get("/allSongs/hindiSongs", getHindiSongs);
router.get("/allSongs/decadeBest", getDecadeBest);
router.get("/allSongs/yearBest", getYearBest);
router.get("/allSongs/mix1", getMix1);
router.get("/allSongs/mix3", getMix3);
router.get("/allSongs/mix5", getMix5);
router.get("/allSongs/himym", getHimym);
router.get("/allSongs/kk", getKK);
router.get("/allSongs/recommends", getRecommends);
router.get("/allSongs/darshan", getDarshan);
router.get("/allSongs/sheeran", getSheeran);
router.get("/allSongs/twilight", getTwilight);

export default router;
