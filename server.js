import express from "express";
import dotenv from "dotenv";
import colors from 'colors';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config();    //env configuration
connectDB();        //DB Configuration

//fix ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()   

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//static files
app.use(express.static(path.join(__dirname, './client/build')));

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product',productRoutes);

//rest api
app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});


const Port = process.env.PORT || 8080;
app.listen(Port, () => {
    console.log(`server running on ${Port}`.bgGreen.white)
}) 