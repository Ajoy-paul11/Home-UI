import React from "react";

function Following() {
  const following = [
    {
      id: 1,
      image:
        "https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg",
    },
    {
      id: 2,
      image:
        "https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg",
    },
    {
      id: 3,
      image:
        "https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg",
    },
    {
      id: 4,
      image:
        "https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg",
    },
    {
      id: 5,
      image:
        "https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg",
    },
    {
      id: 6,
      image:
        "https://img.favpng.com/14/9/10/icon-person-png-favpng-3vS4Gbuax6U5L7Lm0SNcd0eFz.jpg",
    },
  ];
  return (
    <div className="w-full p-4 bg-neutral-800 text-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">
          People you follow
        </h3>
        <button className="text-sm text-blue-600 hover:underline">
          Show All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {following.map((follower) => (
          <div key={follower.id} className="relative">
            <img
              src={follower.image}
              alt={"Follower " + follower.id}
              className="w-10 h-10 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Following;
