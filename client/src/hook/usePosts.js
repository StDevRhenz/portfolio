import { useEffect, useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://portfolio-chab.onrender.com/api/posts");
        if (!res.ok) throw new Error("Hindi na fetch ang posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError("Hindi na fetch ang posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
