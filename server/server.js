import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: "rzp_test_j9in5uw2tvdckP",
  key_secret: "DSulTqoikZ8fq5xrv9MoG5A1",
});

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);
