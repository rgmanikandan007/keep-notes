const express = require("express");
const cors = require("cors");
const connectToMongoDB = require("./db/db");

const noteRouter = require("./routes/note"); 

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api/note', noteRouter)



app.post('/api/note/add', (req, res) => {
    console.log('Received a POST request to /api/note/add');
    console.log(req.body); //check if data is sent correctly
    res.status(200).send({ message: 'Note added successfully' });
  });

const port = 5000;

app.listen(port, () => {
    connectToMongoDB()
    console.log(`Server is running on port  ${port}`);
});