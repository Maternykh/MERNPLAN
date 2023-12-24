import express from "express";
import { Day } from "../models/dayModal.js";

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.tascName ||
      !req.body.dayName ||
      !req.body.monthAndYears ||
      !req.body.category ||
      !req.body.color
    ) {
      return res.status(400).send({
        message:
          "Send all required fields:tascName, dayName, events, monthAndYears, category, color",
      });
    }
    const newDay = {
      dayName: req.body.dayName,
      tascName: req.body.tascName,
      events: req.body.events,
      monthAndYears: req.body.monthAndYears,
      category: req.body.category,
      color: req.body.color,
      note: req.body.note,
    };
    const day = await Day.create(newDay);
    return res.status(201).send(day);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const day = await Day.find({});
    return res.status(200).json(day);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.tascName ||
      !req.body.dayName ||
      !req.body.monthAndYears ||
      !req.body.category ||
      !req.body.color
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: dayName, events, monthAndYears, category, color",
      });
    }
    const { id } = req.params;
    const result = await Day.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Day not found" });
    }
    return res.status(200).send({ message: "Day update succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Day.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Day not found" });
    }
    return res.status(200).send({ message: "Day delete succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
