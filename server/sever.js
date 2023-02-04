import express from 'express';
import cors from 'cors';
import connectDB from './src/config/connet-database';
require('dotenv').config();

const app = express();

// setup tránh lỗi cors 
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// setup sử dụng json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// kết nối với DB
connectDB()

const PORT = process.env.PORT || 8080;

const listen = app.listen(PORT, () => {
    console.log(`app is running in the port ${listen.address().port}`);
})