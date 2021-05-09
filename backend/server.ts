import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import routes from './routes';

dotenv.config()

const app = express();
const port = process.env.PORT || 5050


app.use(cors())
app.use(express.json())

app.get('/', (req,res) => res.send('Hello World'));

const uri: string = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


routes({ app });

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});