import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   methods: 'GET,POST,PUT,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 200
// };

app.use(cors());
const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;
const PORT = process.env.PORT || 5000;
console.log("Your MongoDB URL is:");

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`App is running on ${PORT}`)))
  .catch((e) => console.log(e.message));

