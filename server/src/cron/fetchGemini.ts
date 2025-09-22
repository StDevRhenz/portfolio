import cron from "node-cron";
import { supabase } from "../lib/supabase";
import { getGeminiPosts } from "../services/gemini";

cron.schedule("0 22 * * 1", async () => {
  console.log("🕙 Weekly Cron: Fetching new Gemini posts & cleaning old posts...");

  try {
    // 1️ Fetch new posts from Gemini
    const newPosts = await getGeminiPosts();
    const { error: insertError } = await supabase.from("posts").insert(newPosts);
    if (insertError) throw insertError;
    console.log(`✅ Inserted ${newPosts.length} new Gemini posts`);

    // 2️ Cleanup old posts, keeping only the latest 6
    const { data: posts, error } = await supabase
      .from("posts")
      .select("id")
      .order("date", { ascending: true });

    if (error) throw error;

    if (posts && posts.length > 6) {
      const idsToDelete = posts.slice(0, posts.length - 6).map(post => post.id);
      const { error: delError } = await supabase
        .from("posts")
        .delete()
        .in("id", idsToDelete);
      if (delError) throw delError;

      console.log(`🧹 Deleted ${idsToDelete.length} old posts`);
    } else {
      console.log("ℹ️ No cleanup needed, 6 or fewer posts exist.");
    }
  } catch (err) {
    console.error("❌ Weekly cron failed:", err);
  }
});
