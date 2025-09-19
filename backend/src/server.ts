import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/db";
import todoRoutes from "./routes/todo.routes";
import cors from "cors";

dotenv.config();

const app = express();   

// ✅ CORS enable
app.use(cors({
  origin: "http://localhost:5173",   // frontend ka URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ routes
app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected ✅");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed ❌", err);
  });
