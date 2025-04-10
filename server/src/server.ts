import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectDb } from './config/db';
import userRoute from '../src/routes/user.route'
import productRoute from '../src/routes/product.route'

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


connectDb();

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
