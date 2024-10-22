import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* <!-- ========== HEADER ========== --> */}
      <header className="flex flex-wrap h-[80px] md:justify-start md:flex-nowrap z-50 w-full  border-b border-gray-200 bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            <Link
              className="flex-none mr-4 font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              to="/"
              aria-label="Logo"
            >
              <img
                className=" w-[150px]"
                src="https://images.squarespace-cdn.com/content/v1/5aafcd3a4eddeccf69eae084/50316180-ada6-4bc7-ba98-5fb825380184/White+logo+with+lockup+icon+3.png?format=1500w"
                alt="Logo"
              />
            </Link>

            {/* Move the Home options */}
            <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
              <Link
                className="p-2 mx-1 flex items-center text-sm rounded-lg focus:outline-none  hover:bg-neutral-700 text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                to="/"
              >
                Home
              </Link>
              <Link
                to="/task"
                className="p-2 mx-1 flex items-center text-sm  rounded-lg focus:outline-none  hover:bg-neutral-700 text-neutral-200"
              >
                Task
              </Link>

              {/* <!-- Dropdown --> */}
              <div className="hs-dropdown [--strategy:absolute] [--flip:false] hs-dropdown-example relative inline-flex">
                <button
                  id="hs-dropdown-example"
                  type="button"
                  className="hs-dropdown-toggle p-2 mx-1 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  Explore
                  <svg
                    className="hs-dropdown-open:rotate-180 size-4 text-gray-600 dark:text-neutral-600"
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
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropdown-example"
                >
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    to="/project"
                  >
                    Project
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    to="/album"
                  >
                    Album
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    to="/board"
                  >
                    Board
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    to="/progress"
                  >
                    Progress
                  </Link>
                </div>
              </div>
              {/* <!-- End Dropdown --> */}
            </div>

            {/* <!-- Collapse Button --> */}
            <button
              type="button"
              className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-header-base-collapse"
              aria-expanded="false"
              aria-controls="hs-header-base"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-header-base"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block shrink-0 hidden size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
            {/* <!-- End Collapse Button --> */}
          </div>

          {/* <!-- Collapse --> */}
          <div
            id="hs-header-base"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
            aria-labelledby="hs-header-base-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                    <div className="my-2 md:my-0 md:mx-2 flex gap-1 items-center">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 14 20"
                      >
                        <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                      </svg>
                    </div>
                    <div className="my-2 md:my-0 md:mx-2 flex gap-1 items-center">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Envelope"
                        enableBackground="new 0 0 512 512"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="20"
                          d="M27.878,115.042c5.583-4.59,12.742-7.335,20.532-7.335H463.59c7.79,0,14.95,2.745,20.532,7.346"
                          className="stroke-[#ffffff] svgStroke"
                        ></path>
                        <path
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="20"
                          d="M496,140.117v231.766c0,17.893-14.506,32.41-32.41,32.41H48.41c-17.9,0-32.41-14.511-32.41-32.41V140.117
		c0-10.114,4.625-19.131,11.878-25.075l215.499,172.878c7.375,5.917,17.871,5.917,25.246,0l215.499-172.867
		C491.375,120.986,496,130.003,496,140.117z"
                          className="stroke-[#ffffff] svgStroke"
                        ></path>
                        <line
                          x1="195.769"
                          x2="27.878"
                          y1="249.727"
                          y2="396.958"
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="20"
                          className="stroke-[#ffffff] svgStroke"
                        ></line>
                        <line
                          x1="316.359"
                          x2="484.25"
                          y1="249.727"
                          y2="396.958"
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="20"
                          className=" stroke-[#ffffff] svgStroke"
                        ></line>
                      </svg>
                    </div>
                    <div className="my-2 md:my-0 md:mx-2 flex gap-1 items-center">
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        id="Thunderbolt"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 3000 3000"
                        version="1.1"
                        viewBox="0 0 3000 3000"
                      >
                        <g fill="#000000" className="text-[#000000] svgShape">
                          <g fill="#000000" className="text-[#000000] svgShape">
                            <path
                              fill="#959595"
                              d="M1029.76,2726.62c-8.36,0-16.79-2.41-24.17-7.37c-18.06-12.14-24.33-35.77-14.68-55.26l345.38-697.17H1045.7
			c-14.52,0-28.09-7.27-36.13-19.38c-8.04-12.09-9.49-27.41-3.86-40.81l243.43-579.19h-261.5c-12.94,0-25.2-5.77-33.44-15.75
			s-11.59-23.11-9.16-35.81l185.86-967.3c3.93-20.43,21.8-35.2,42.6-35.2h668.37c14.42,0,27.89,7.17,35.96,19.11
			c8.06,11.95,9.66,27.12,4.27,40.5l-224,555.25h296.2c15.37,0,29.59,8.13,37.39,21.37c7.79,13.25,8,29.63,0.53,43.08
			l-319.42,574.93h339.56c17.05,0,32.53,10,39.54,25.55c7.02,15.55,4.26,33.77-7.03,46.55l-982.58,1112.25
			C1053.78,2721.6,1041.84,2726.62,1029.76,2726.62z"
                              className="text-[#fcc42f] svgShape"
                            ></path>
                            <g
                              fill="#000000"
                              className="text-[#000000] svgShape"
                            >
                              <path
                                fill="#8c8c8c"
                                d="M1841.87,316.75l-248.05,614.87h360.48L1599.08,1571h413.28l-982.58,1112.25l376.4-759.81H1045.7
				l268.73-639.38h-326.8l185.87-967.31H1841.87 M1841.87,229.99H1173.5c-41.6,0-77.35,29.53-85.2,70.39l-185.87,967.31
				c-4.88,25.41,1.83,51.68,18.31,71.63c16.48,19.95,41.01,31.5,66.88,31.5h196.23l-218.14,519.01
				c-11.26,26.79-8.36,57.43,7.72,81.63c16.08,24.2,43.21,38.74,72.26,38.74h220.68l-314.34,634.54
				c-19.31,38.99-6.76,86.25,29.35,110.52c14.78,9.93,31.63,14.76,48.35,14.76c24.15,0,48.04-10.06,65.06-29.32l982.58-1112.25
				c22.59-25.57,28.09-62,14.07-93.1c-14.02-31.1-44.97-51.1-79.09-51.1h-265.84l283.61-510.49c14.93-26.87,14.52-59.64-1.07-86.13
				c-15.59-26.49-44.03-42.76-74.77-42.76h-231.93l199.96-495.65c10.79-26.74,7.58-57.09-8.54-80.99
				C1897.65,244.32,1870.7,229.99,1841.87,229.99L1841.87,229.99z"
                                className="text-[#ffe11a] svgShape"
                              ></path>
                            </g>
                          </g>
                          <polygon
                            fill="#ffffff"
                            points="1389.24 316.75 1118.3 1284.06 987.63 1284.06 1173.5 316.75"
                            className="text-[#ffffff] svgShape"
                          ></polygon>
                          <polygon
                            fill="#ffffff"
                            points="1314.43 1284.06 1426.5 1284.06 1188.44 1923.44 1045.7 1923.44"
                            className="text-[#ffffff] svgShape"
                          ></polygon>
                          <polygon
                            fill="#808080"
                            points="1599.08 1571 1485.76 1571 1803.43 931.62 1954.3 931.62"
                            className="text-[#caab36] svgShape"
                          ></polygon>
                          <polygon
                            fill="#808080"
                            points="2012.37 1571 1832.91 1569.84 1045.7 2665.23"
                            className="text-[#caab36] svgShape"
                          ></polygon>
                        </g>
                      </svg>
                    </div>
                    <img
                      className="w-10 h-10 rounded bg-cover"
                      src="https://www.vhv.rs/dpng/d/593-5939079_professional-single-person-png-transparent-png.png"
                      alt="user avatar"
                    ></img>
                    <div className="my-2 md:my-0 md:mx-2">
                      <div className="w-full h-px md:w-[2px] md:h-8 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
                    </div>
                    {/* <!-- Button Group --> */}
                    <div className=" flex flex-wrap items-center gap-x-1.5">
                      <button
                        type="button"
                        className="py-[7px] px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <svg
                          className="w-4 h-4 text-gray-800 dark:text-white"
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
                        Button
                      </button>
                      <button
                        className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        to="#"
                      >
                        <svg
                          className="w-4 h-4 mr-1 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                          />
                        </svg>
                        Sign in
                      </button>
                      <button
                        className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        to="#"
                      >
                        <svg
                          className="w-4 h-4 text-gray-800 dark:text-white"
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
                            strokeWidth="2"
                            d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
                          />
                        </svg>
                        More
                      </button>
                    </div>
                    {/* <!-- End Button Group --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Collapse --> */}
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </div>
  );
}

export default Navbar;
