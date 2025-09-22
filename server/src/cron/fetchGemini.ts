import cron from "node-cron";
import { getGeminiPosts } from "../services/gemini";
import { supabase } from "../lib/supabase";

// 🕛 Run every Monday at 00:00
cron.schedule("0 0 * * 1", async () => {
  console.log("⏰ Cron: Fetching new Gemini post...");

  try {
    const posts = await getGeminiPosts();
    const post = posts[0]; // kunin lang yung unang post

    // Burahin muna lahat para laging 1 post lang
    const { error: deleteError } = await supabase.from("posts").delete().neq("id", 0);
    if (deleteError) throw deleteError;

    // Insert new post
    const { error: insertError } = await supabase.from("posts").insert([
      {
        title: post.title,
        date: post.date,
        content: post.content,
      },
    ]);
    if (insertError) throw insertError;

    console.log("✅ New Gemini post saved to Supabase!");
  } catch (err) {
    console.error("❌ Cron job error:", err);
  }
});

// 🕕 Cleanup: Run every 6 hours to delete all posts
cron.schedule("0 */6 * * *", async () => {
  console.log("🧹 Cron: Cleaning up posts...");

  try {
    const { error } = await supabase.from("posts").delete().neq("id", 0);
    if (error) throw error;

    console.log("✅ Old posts deleted successfully!");
  } catch (err) {
    console.error("❌ Cleanup error:", err);
  }
});
