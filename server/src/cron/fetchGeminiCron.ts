import cron from "node-cron";
import { supabase } from "../lib/supabase";
import { getGeminiPosts } from "../services/gemini";
// 16 23 * * 1
// 0 22 * * 1
cron.schedule("0 22 * * 1", async () => { 
  console.log("🕙 Weekly Cron: Fetching new Gemini posts & cleaning old posts...");

  try {
    const newPosts = await getGeminiPosts();
    console.log("[DEBUG] Gemini API returned:", newPosts);

    if (newPosts && newPosts.length > 0) {
      const { error: insertError } = await supabase.from("posts").insert(newPosts);
      if (insertError) console.error("[DEBUG] Supabase insert error:", insertError);
      else console.log(`[DEBUG] Inserted ${newPosts.length} new Gemini posts`);
    }

    const { data: posts, error } = await supabase.from("posts").select("id").order("date", { ascending: true });
    if (error) throw error;

    if (posts && posts.length > 6) {
      const idsToDelete = posts.slice(0, posts.length - 6).map(p => p.id);
      const { error: delError } = await supabase.from("posts").delete().in("id", idsToDelete);
      if (delError) throw delError;
      console.log(`🧹 Deleted ${idsToDelete.length} old posts`);
    }
  } catch (err) {
    console.error("❌ Weekly cron failed:", err);
  }
});

