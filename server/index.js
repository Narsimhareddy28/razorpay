import express from "express";
import { config } from "dotenv";
import Razorpay from "razorpay";
import cors from "cors";
import paymentRoute from "./routes/paymentRoutes.js";
import auth from "./routes/auth.js";
import { connectDB } from "./config/database.js";

config({ path: "./config/config.env" });

const app = express();

// Connect to the database
connectDB();

// Create a new instance of Razorpay
export const instance = new Razorpay({
  key_id: "rzp_test_j9in5uw2tvdckP",
  key_secret: "DSulTqoikZ8fq5xrv9MoG5A1",
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", paymentRoute);
app.use('/api/auth', auth);

// Route to get Razorpay key
app.get("/api/getkey", (req, res) =>
  res.status(200).json({ "key": "rzp_test_j9in5uw2tvdckP"})
);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running");
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is working on ${port}`)
);
