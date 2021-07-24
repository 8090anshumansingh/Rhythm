import songs from "../json/Lord Huron.js";

export const getLordHuron = (req, res) => {
  try {
    res.status(200).json(songs);
  } catch (e) {
    console.log(e);
  }
};
