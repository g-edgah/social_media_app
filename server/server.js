import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';


//config
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors())
app.use(express.json());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common')) 
app.use(bodyParser.json({ limit: '30mb', extended: true} ))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/assets', express.static(path.join(__dirname, 'src/assets')))


//file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/assets');
    }, filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ 
    storage: storage,
    // limits: { // Security-focused limits
        // fieldNameSize: 100,      // Field names can't be too long
        // fieldSize: 1 * 1024 * 1024, // 1MB for text fields
        // fields: 50,              // Prevent form spam
        // fileSize: 10 * 1024 * 1024, // 10MB per file
        // files: 5,                // Max 5 files per request
        // parts: 60,    },
    // fileFilter: function(req, file, cb) {
    //     // Accept only images
    //     if (file.mimetype.startsWith('image/')) {
    //         cb(null, true);
    //     } else {
    //         cb(new Error('Only images allowed'), false);
    //     }
    // }
  })


 //mongoose
const PORT = process.env.PORT||7058;
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`connected on port ${PORT}`)) 
    })
    .catch((error) => console.log(`error: ${error}`))

console.log("the end")