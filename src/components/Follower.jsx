import React from "react";

function Follower() {
  const followers = [
    {
      id: 1,
      image:
        "https://w7.pngwing.com/pngs/253/160/png-transparent-person-icon-pip-people-people-icon-person-icon-figure-flat-thumbnail.png",
    },
    {
      id: 2,
      image:
        "https://w7.pngwing.com/pngs/253/160/png-transparent-person-icon-pip-people-people-icon-person-icon-figure-flat-thumbnail.png",
    },
    {
      id: 3,
      image:
        "https://w7.pngwing.com/pngs/253/160/png-transparent-person-icon-pip-people-people-icon-person-icon-figure-flat-thumbnail.png",
    },
    {
      id: 4,
      image:
        "https://w7.pngwing.com/pngs/253/160/png-transparent-person-icon-pip-people-people-icon-person-icon-figure-flat-thumbnail.png",
    },
    {
      id: 5,
      image:
        "https://w7.pngwing.com/pngs/253/160/png-transparent-person-icon-pip-people-people-icon-person-icon-figure-flat-thumbnail.png",
    },
    {
      id: 6,
      image:
        "https://w7.pngwing.com/pngs/253/160/png-transparent-person-icon-pip-people-people-icon-person-icon-figure-flat-thumbnail.png",
    },
  ];
  return (
    <div className="w-full p-4 bg-neutral-800 text-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Followers</h3>
        <button className="text-sm text-blue-600 hover:underline">
          Show All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {followers.map((follower) => (
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

export default Follower;
