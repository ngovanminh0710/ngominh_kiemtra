import { createUser } from "../Service/userService.js";
import { asyncCatch } from "../utils/asyncCatch.js";
import express from 'express'
import { validateCreateUser } from "../validate/userValidate.js";

const userController = express.Router()
userController.post('/', asyncCatch(validateCreateUser), asyncCatch(createUser));


export default userController;