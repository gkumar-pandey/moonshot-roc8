import { Schema } from "mongoose";
import mongoose from "mongoose";

const dataSchema = new Schema({
  date: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  minAge: {
    type: Number,
  },
  maxAge: {
    type: Number,
  },
  A: {
    type: Number,
  },
  B: {
    type: Number,
  },
  C: {
    type: Number,
  },
  D: {
    type: Number,
  },
  E: {
    type: Number,
  },
  F: {
    type: Number,
  },
});

const Data = mongoose.model("Data", dataSchema);

export default Data;
