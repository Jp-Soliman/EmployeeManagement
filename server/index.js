import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import UserRoute from './routes/UserRoute.js'

// require("dotenv").config({ path: "./config.env" });

// hardcoded paths
const dataBaseURI = 'mongodb://127.0.0.1:27017/MernStack'
const serverPort = 5000;

// using dotenv
// const dataBaseURI = process.env.DATABASE_PORT;
// const serverPort = process.env.PORT || 5000;

mongoose.set('strictQuery', true);

const app = express();

mongoose.connect(dataBaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => {console.log('Successfully Connected to the database')})

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(serverPort, () => console.log('Server up and running...'))
