import express from "express";
import { supabase } from "../lib/supabase";

const router = express.Router();

router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("date", { ascending: false })
    .limit(10);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});


export default router;
