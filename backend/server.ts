import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

const app = express();
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.get('/', (req,res) => res.send('Hello World'));


const uri: string = 'process.env.ATLAS_URI';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});