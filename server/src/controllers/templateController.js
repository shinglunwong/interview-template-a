import { Template } from "../models/Template.js";

export const getDefaultTemplate = async (req, res) => {
  try {
    const template = await Template.findOne().sort({ createdAt: -1 });

    if (!template) {
      return res.status(404).json({ message: "No template found" });
    }

    res.json(template);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTemplate = async (req, res) => {
  const { name, fields } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!Array.isArray(fields)) {
    return res.status(400).json({ message: "Fields must be an array" });
  }

  try {
    const template = await Template.create({ name, fields });
    res.status(201).json(template);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
