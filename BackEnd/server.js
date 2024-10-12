// server.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Product = require("./models/Product");
const activityLogger = require("./middleware/activityLogger");
const userActivityMiddleware = require("./middleware/userActivityMiddleware");
const { isAuth } = require("./middleware/authMiddleware.js");

const app = express();

// Middleware
app.use(cors());
app.use(cookieParser()); // Use cookie-parser middleware

// Apply the activity logger middleware
app.use(activityLogger);

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/test", async (req, res) => {
  const { name, description, price, category, stock, isFeatured } = req.body;

  console.log(description, price, category, isFeatured, "data body !!!!");
  res.send({ description, name, price });
});
// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exits the server if the connection fails
  }
};

connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/admin/users", require("./routes/adminUsers"));
app.use("/api/products", require("./routes/product"));
app.use("/api/admin/products", require("./routes/adminProduct"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/user/orders", require("./routes/userOrder"));
app.use("/api/admin/orders", require("./routes/adminOrder"));
app.use("/api/payments", require("./routes/payment"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/admin/contact", require("./routes/adminContact"));
app.use("/api/notifications", require("./routes/notification"));
app.use("/api/newsletter", require("./routes/newsletter"));
app.use("/api/promotions", require("./routes/promotion"));
app.use("/api/preferences", require("./routes/preferences"));

// Basic Route
app.get("/", (req, res) => {
  res.send("Uptech E-commerce API is running...");
});

app.use(userActivityMiddleware);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
