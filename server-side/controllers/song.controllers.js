import songs from "../json/Lord Huron.js";
import hindiSongs from "../json/Best Hindi Songs.js";
import bestDecadeSongs from "../json/Best of the Decade For You.js";
import best2021 from "../json/Chillout 2021.js";
import mix1 from "../json/Daily Mix 1.js";
import mix3 from "../json/Daily Mix 3.js";
import mix5 from "../json/Daily Mix 5.js";
import himym from "../json/How I Met Your Mother Soundtrack.js";
import kk from "../json/KK Radio.js";
import recommends from "../json/MY COALESCE.js";
import darshan from "../json/This Is Darshan Raval.js";
import edSheeran from "../json/This Is Ed Sheeran.js";
import twilight from "../json/Twilight.js";

export const getLordHuron = (req, res) => {
  try {
    res.status(200).json(songs);
  } catch (e) {
    console.log(e);
  }
};
export const getHindiSongs = (req, res) => {
  try {
    res.status(200).json(hindiSongs);
  } catch (e) {
    console.log(e);
  }
};
export const getDecadeBest = (req, res) => {
  try {
    res.status(200).json(bestDecadeSongs);
  } catch (e) {
    console.log(e);
  }
};
export const getYearBest = (req, res) => {
  try {
    res.status(200).json(best2021);
  } catch (e) {
    console.log(e);
  }
};
export const getMix1 = (req, res) => {
  try {
    res.status(200).json(mix1);
  } catch (e) {
    console.log(e);
  }
};
export const getMix3 = (req, res) => {
  try {
    res.status(200).json(mix3);
  } catch (e) {
    console.log(e);
  }
};
export const getMix5 = (req, res) => {
  try {
    res.status(200).json(mix5);
  } catch (e) {
    console.log(e);
  }
};
export const getHimym = (req, res) => {
  try {
    res.status(200).json(himym);
  } catch (e) {
    console.log(e);
  }
};
export const getKK = (req, res) => {
  try {
    res.status(200).json(kk);
  } catch (e) {
    console.log(e);
  }
};
export const getRecommends = (req, res) => {
  try {
    res.status(200).json(recommends);
  } catch (e) {
    console.log(e);
  }
};
export const getDarshan = (req, res) => {
  try {
    res.status(200).json(darshan);
  } catch (e) {
    console.log(e);
  }
};
export const getSheeran = (req, res) => {
  try {
    res.status(200).json(edSheeran);
  } catch (e) {
    console.log(e);
  }
};
export const getTwilight = (req, res) => {
  try {
    res.status(200).json(twilight);
  } catch (e) {
    console.log(e);
  }
};
