import mongoose from "mongoose";

const FieldSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["text", "number"],
      required: true,
    },
  },
  { _id: false }
);

const TemplateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fields: {
      type: [FieldSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export const Template = mongoose.model("Template", TemplateSchema);
