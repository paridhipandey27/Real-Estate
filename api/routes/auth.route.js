import express from 'express';
import {signup} from '../controller.js';
const router = express.Router();
router.post("/signup")