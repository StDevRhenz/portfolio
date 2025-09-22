import { usePosts } from '../hook/usePosts';

export default function Post() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div
        className="flex items-center justify-center h-screen text-white"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      >
        Loading posts...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex items-center justify-center h-screen text-red-500"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      >
        {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div
        className="flex items-center justify-center h-screen text-white text-xl"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      >
        Wala pang post 😅
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >
      <div className="container mx-auto max-w-4xl bg-white/5 rounded-2xl p-10 shadow-lg">
        <h1 className="text-3xl lg:text-4xl font-light text-white mb-8 text-center tracking-wide">
          <span className="font-semibold">Tech Updates</span>
        </h1>

        <div
          className="h-[28rem] space-y-6 pr-2 overflow-y-scroll"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-white/20 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{post.date}</p>
              <p className="text-gray-300 leading-relaxed">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
