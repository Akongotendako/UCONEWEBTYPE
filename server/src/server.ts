import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectDb } from '../src/config/db.js';
import userRoute from '../src/routes/user.route.js'
import productRoute from '../src/routes/product.route.js'
import cartRoute from '../src/routes/cart.route.js'
import orderRoute from '../src/routes/order.route.js'
import reviewRoute from '../src/routes/review.route.js'

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


connectDb();

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use('/api/orders', orderRoute);
app.use("/api/reviews", reviewRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
