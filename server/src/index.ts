// src/index.ts
import dotenv from "dotenv";
dotenv.config(); // ✅ MUST be first

import express from "express";
import cors from "cors";
import postsRouter from "./routes/posts";
import { supabase } from "./lib/supabase"; // now safe to import

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/posts", postsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

  // Test Supabase connection
  try {
    const { data, error } = await supabase.from("posts").select("*").limit(1);
    if (error) throw error;
    console.log("🟢 Supabase connected successfully!");
  } catch (err) {
    console.error("❌ Supabase connection failed:", err);
  }
});
