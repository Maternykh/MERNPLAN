import express from "express";
import { Purp } from "../models/purposeModal.js";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.value || !req.body.desc) {
      return res.status(400).send({
        message: "Send all required fields:title,desc, value, isCompleted",
      });
    }
    const newPurp = {
      title: req.body.title,
      desc: req.body.desc,
      value: req.body.value,
      isCompleted: req.body.isCompleted,
    };
    const purp = await Purp.create(newPurp);
    return res.status(201).send(purp);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const purp = await Purp.find({});
    return res.status(200).json(purp);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.value || !req.body.desc) {
      return res.status(400).send({
        message: "Send all required fields: title,desc, value, isCompleted",
      });
    }
    const { id } = req.params;
    const result = await Purp.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Purp not found" });
    }
    return res.status(200).send({ message: "Purp update succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Purp.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Purp not found" });
    }
    return res.status(200).send({ message: "Purp delete succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
