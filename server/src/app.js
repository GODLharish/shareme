import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import morgan from "morgan"
import dotenv from "dotenv"
dotenv.config();

const app = express();

// CORS configuration - allow production origin and handle wildcards for dev
app.use(cors({
    origin: process.env.CLIENT_URL || '*',
    credentials: true
}))

app.use(cookieParser());

// Increase body-parser limits to handle file uploads (match multer's 100MB limit)
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '100mb' }));
app.use(morgan('dev'))


export { app };