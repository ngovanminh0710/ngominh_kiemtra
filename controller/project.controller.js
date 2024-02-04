import { asyncCatch } from "../utils/asyncCatch.js";
import express from "express";
import { validateCreateProject } from "../validate/projectValidate.js";
import { createProject } from "../Service/projectService.js";

const projectController = express.Router();
projectController.post("/", asyncCatch(validateCreateProject), asyncCatch(createProject));

export default projectController;