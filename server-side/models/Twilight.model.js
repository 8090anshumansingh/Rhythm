import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TwilightSchema = new Schema({
  tracks: [
    {
      title: { type: String },
      artist: { type: String },
      preview_url: { type: String },
      duration: { type: Number },
      album: { type: String },
      image: { type: String },
      isLiked: { type: Boolean },
    },
  ],
});

const Twilight = mongoose.model("Twilight", TwilightSchema);

export default Twilight;
