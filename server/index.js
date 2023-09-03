import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Code with hidden links are in notepad

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.use('/posts',postRoutes);
// app.use('/user',userRoutes)'

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.get('/', (req,res) => {
  res.send('APP IS RUNNING')
})

const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB Atlas:', error.message);
  });

