import { usePosts } from '../hook/usePosts';
import { useState, useEffect } from 'react';

export default function Post() {
  const { posts, loading, error } = usePosts();
  const [countdown, setCountdown] = useState("");

useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date();
    const nextMonday = new Date(now);

    const daysUntilMonday = (1 + 7 - now.getDay()) % 7 || 7;
    nextMonday.setDate(now.getDate() + daysUntilMonday);
    nextMonday.setHours(22, 0, 0, 0);

    let diff = nextMonday.getTime() - now.getTime();
    if (diff < 0) {
      nextMonday.setDate(nextMonday.getDate() + 7);
      diff = nextMonday.getTime() - now.getTime();
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setCountdown(
      diff <= 0
        ? "It's Monday 10 PM! 🚀"
        : `${days > 0 ? days + " day" + (days > 1 ? "s " : " ") : ""}${hours}h ${minutes}m ${seconds}s`
    );
  }, 1000);

  return () => clearInterval(interval);
}, []);


  if (loading) return (
    <div className="flex items-center justify-center h-screen text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      Loading posts...
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center h-screen text-red-500" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      {error}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 pt-20" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
      <p className="text-center text-gray-300 mb-8 text-xl">{countdown}</p>

      {posts.length === 0 ? (
        <div className="flex items-center justify-center text-white text-xl h-96">
          Wala pang post 😅
        </div>
      ) : (
        <div className="container mx-auto max-w-4xl bg-white/5 rounded-2xl p-10 shadow-lg">
          <h1 className="text-3xl lg:text-4xl font-light text-white mb-2 text-center tracking-wide">
            <span className="font-semibold">Tech Updates</span>
          </h1>

          <div className="h-[28rem] space-y-6 pr-2 overflow-y-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {posts.map((post, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-white/20 transition duration-300">
                <h3 className="text-xl font-semibold text-white leading-tight">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{post.date}</p>
                <p className="text-gray-300 leading-relaxed">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

