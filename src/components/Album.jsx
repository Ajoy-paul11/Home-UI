import React, { useState } from "react";

function Album() {
  const [albumList, setAlbumList] = useState([
    {
      id: 1,
      title: "A Portfolio",
      image:
        "https://c.ekstatic.net/ecl/explore-destination/beach/beach-view-with-clear-blue-water-w800x600.jpg",
    },
    {
      id: 2,
      title: "Group visit",
      image:
        "https://c.ekstatic.net/ecl/explore-destination/beach/beach-view-with-clear-blue-water-w800x600.jpg",
    },
    {
      id: 3,
      title: "Last day of 2023",
      image:
        "https://c.ekstatic.net/ecl/explore-destination/beach/beach-view-with-clear-blue-water-w800x600.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
  });

  const addAlbum = (event) => {
    event.preventDefault();

    const newAlbum = {
      id: albumList.length + 1,
      ...formData,
    };

    setAlbumList([...albumList, newAlbum]);

    setFormData({ title: "", image: "" });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className=" h-screen bg-neutral-800 text-gray-200 flex justify-center">
      <div className=" w-full p-6 flex justify-center ">
        <div className=" w-2/3">
          <h3 className=" text-center text-2xl font-bold p-4 mb-4">
            List of Albums
          </h3>
          <div className=" flex flex-col gap-6">
            {albumList.map((list) => (
              <div key={list.id} className="flex justify-between items-center">
                <div className=" flex items-center gap-x-4">
                  <img
                    className=" w-[50px]"
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
                    className="w-6 h-6 text-gray-800 dark:text-blue-700"
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
        <div>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-slide-up-animation-modal"
            data-hs-overlay="#hs-slide-up-animation-modal"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
                d="M5 12h14m-7 7V5"
              />
            </svg>
            New Album
          </button>

          <div
            id="hs-slide-up-animation-modal"
            className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog"
            tabIndex="-1"
            aria-labelledby="hs-slide-up-animation-modal-label"
          >
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3
                    id="hs-slide-up-animation-modal-label"
                    className="font-bold text-gray-800 dark:text-white"
                  >
                    Add Album
                  </h3>
                  <button
                    type="button"
                    className="hs-dropup-toggle size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                    aria-label="Close"
                    data-hs-overlay="#hs-slide-up-animation-modal"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>
                <form onSubmit={addAlbum}>
                  <div className="p-4 overflow-y-auto">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.name}
                      onChange={handleChange}
                      id="title"
                      className="block w-full p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <label
                      htmlFor="image-url"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      id="image-url"
                      className="block w-full p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                    <button
                      type="button"
                      className="hs-dropup-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      data-hs-overlay="#hs-slide-up-animation-modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      New Album
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
