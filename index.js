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
sv.use("/index", (req, res) => res.status(200).send("Hello world"));
sv.use('/users', userController);
sv.use('/projects', projectController);
mongoose.connect('mongodb://localhost:27017/ngominh_db');


  app.listen(8080, () => {
    console.log('Server is running!');
});