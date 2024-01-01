import { body } from "express-validator";
export const registerValidation = [
  body("userEmail", "Неверный формат почты").isEmail(),
  body("userPasswordHash", "Пароль должен быть не меньше 5 символов").isLength({
    min: 5,
  }),
];
