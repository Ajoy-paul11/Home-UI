import React from "react";

function PersonalProgress() {
  const progressItems = [
    {
      color: "bg-orange-500",
      question: "Are either of your parents living?",
      value: 70,
      max: 100,
    },
    {
      color: "bg-blue-500",
      question: "Do you belong to any groups in whi...",
      value: 60,
      max: 100,
    },
    { color: "bg-pink-500", question: "1-2-1 Events", value: 27, max: 100 },
  ];

  return (
    <div className="h-screen bg-neutral-800 flex justify-center">
      <div className="bg-neutral-800 h-max text-gray-200 p-6 rounded-lg shadow-xl max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-200">
            Personal Progress
          </h2>
          <button className="text-blue-500 hover:underline">Go to board</button>
        </div>
        <div className="space-y-4">
          {progressItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
              <div className="flex-grow">
                <p className="text-sm text-gray-600 mb-1">{item.question}</p>
                <div className="relative pt-1">
                  <progress
                    className={`w-full h-2 rounded ${item.color}`}
                    value={item.value}
                    max={item.max}
                  ></progress>
                </div>
              </div>
              <button className="text-gray-500 hover:bg-gray-400 p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Show All
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonalProgress;
