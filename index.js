import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv'

import userController from './controller/user.controller';
import projectController from './controller/project.controller';

const express = require('express');
const mongoose = require('mongoose');
dotenv.config();
const app = express();
app.use(express.json);
app.use(morgan("combined"));
app.use("/index",(request, response))
app.use("/index", (req, res) => res.status(200).send("Hello world"));
app.use('/users', userController);
app.use('/projects', projectController);

app.post("/register", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username) throw new Error("Username is required!");
      if (!password) throw new Error("Password is required!");
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await UserModel.create({
        username,
        password: hashedPassword,
      });
      return res.status(200).send("Register successfully!");
    } catch (error) {
      console.log("error :>> ", error);
      res.status(500).send(error.message);
    }
  });

  server.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username) throw new Error("Username is required!");
      if (!password) throw new Error("Password is required!");
      const user = await UserModel.findOne({ username });
      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        throw new Error("Username or password not correct!");
      }
      return res.status(200).send("Login successfully!");
    } catch (error) {
      console.log("error :>> ", error);
      res.status(500).send(error.message);
    }
  });

mongoose
  .connect(process.env.MONGODB)
  .then(() =>
    server.listen(process.env.PORT, () => console.log("Server is running!"))
  );