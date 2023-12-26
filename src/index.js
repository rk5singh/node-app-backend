import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config({
    path: './env'
});

import connectDB from './db/index.js';

connectDB()
.then()
.catch((err) => {
    console.log(`Mongo DB connection failed: ${err}`);
})


