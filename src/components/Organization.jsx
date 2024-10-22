import React from "react";

function Organization() {
  const projectList = [
    {
      id: 1,
      title: "A Raw material Organization",
      image:
        "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
    },
    {
      id: 2,
      title: "Software Provider Organization",
      image:
        "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
    },
    {
      id: 3,
      title: "XYZ Organization",
      image:
        "https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg",
    },
  ];

  return (
    <div>
      <div className=" flex justify-center text-white">
        <div className="">
          <div className=" text-center text-lg font-semibold p-2 ">
            List of Organizations
          </div>
          <div className=" flex flex-col gap-6">
            {projectList.map((list) => (
              <div key={list.id} className="flex justify-between items-center">
                <div className=" flex items-center gap-x-4">
                  <img
                    className=" w-[30px]"
                    src={list.image}
                    alt={list.title}
                    style={{
                      clipPath:
                        "polygon(25% 0, 77% 0, 100% 56%, 52% 100%, 0 56%)",
                    }}
                  />
                  <h5>{list.title}</h5>
                </div>
                <div className="my-2 md:my-0 md:mx-2 flex gap-1 items-center">
                  <svg
                    className="w-4 h-4 text-gray-800 dark:text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
