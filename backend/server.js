import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './config/database.js';
import user from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', user);


app.get('/api/v1', (req, res) => {
    res.json({message: 'Data from backend'})
})

app.listen(PORT, () => {
    console.log("Server is up and running")
})