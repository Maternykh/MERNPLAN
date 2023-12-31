import express from "express";
import { User } from "../models/userModal.js";
import jwt from "jsonwebtoken";
import { registerValidation } from "../validations/auth.js";
import { validationResult } from "express-validator";

const router = express.Router();
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userEmail: req.body.userEmail });
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }
    const isValidPass =
      req.body.userPasswordHash === user._doc.userPasswordHash;
    if (!isValidPass) {
      return res.status(403).json({
        message: "Неверный логин или пароль",
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    const { userPasswordHash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Не удалось авторизоваться",
    });
  }
});
router.post("/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const doc = new User({
      userEmail: req.body.userEmail,
      userPasswordHash: req.body.userPasswordHash,
      userAvatar: req.body.userAvatar,
    });
    const user = await doc.save();
    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    const { userPasswordHash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "не удалось зарегестрироваться",
    });
  }
});

export default router;
