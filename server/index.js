const express = require("express");
const cors = require("cors");
// const connectToMongoDB = require("./db/db");
import connectToMongoDB from './db/db.js';

// import { EventEmitter } from 'events';
// EventEmitter.defaultMaxListeners = 15;

const noteRouter = require("./routes/note"); 

const app = express();

app.use(cors())
app.use(express.json())
app.use('.api/note', noteRouter)

app.listen(5000, () => {
    connectToMongoDB()
    console.log("Server is running")
})