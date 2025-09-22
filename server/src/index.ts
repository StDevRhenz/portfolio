import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts";
import "./cron/fetchGeminiCron";
import { supabase } from "./lib/supabase";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/posts", postsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

  try {
    const { data, error } = await supabase.from("posts").select("*").limit(1);
    if (error) throw error;
    console.log("🟢 Supabase connected successfully!");
  } catch (err) {
    console.error("❌ Supabase connection failed:", err);
  }
});
