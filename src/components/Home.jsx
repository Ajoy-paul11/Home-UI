import React from "react";
import Follower from "./Follower.jsx";
import Following from "./Following.jsx";
import Organization from "./Organization.jsx";

function Home() {
  const posts = [
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Hello, world!",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      author: "Bob Johnson",
      content: "React is awesome!",
      timestamp: "1 day ago",
    },
    {
      id: 4,
      author: "Alice Williams",
      content: "Just finished a great book!",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div>
      <div className="flex h-screen bg-neutral-800 overflow-hidden">
        {/* Aside bar (fixed width) */}
        <aside className="w-64 p-4 bg-neutral-800 border-r border-gray-200 overflow-y-auto">
          <div className="mb-6">
            <Follower />
          </div>
          <div className="mb-6">
            <Following />
          </div>
          <div className="mb-6">
            <Organization />
          </div>
          {/* Add more sidebar components here */}
        </aside>

        {/* Main content area (takes up remaining width) */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6 sticky top-0 bg-neutral-800 text-white pt-4 pb-2">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Leave a comment here..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg bg-neutral-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Post
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-neutral-800 text-white p-4 rounded-lg shadow-xl w-full"
              >
                <div className="flex items-center mb-2">
                  <img
                    src="https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg"
                    alt={post.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold">{post.author}</h3>
                    <p className="text-sm text-gray-300">{post.timestamp}</p>
                  </div>
                </div>
                <p>{post.content}</p>
                <svg
                  className="w-6 h-6 text-gray-200 my-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                <div className=" w-2/3 flex items-center gap-4">
                  <img
                    src="https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg"
                    alt={post.author}
                    className="w-10 h-10 rounded mr-3"
                  />

                  <input
                    type="text"
                    id="small-input"
                    className="block w-full p-2 text-gray-100 border border-gray-200 rounded-xl bg-neutral-800 text-xs focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
