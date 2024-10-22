import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-neutral-800 text-gray-200 pt-4">
        <div className="h-1 bg-gradient-to-r from-pink-500 via-green-500 to-blue-500"></div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="">
              <Link href="/" className="text-2xl font-bold text-pink-500">
                Makerble
              </Link>
              <nav className="mt-4 space-y-2">
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Pricing & Orders
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-4">
                ORGANIZATIONS
              </h3>
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Create a Team
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Join the Makerbile
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Create Organization Account
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-4">YOUR ACCOUNT</h3>
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Log in
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Profile
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Projects
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Help
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-4">EXPLORE</h3>
              <nav className="space-y-2">
                <Link
                  href="/m"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Makers
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Projects
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Teams
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Brands
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Jobs
                </Link>
                <Link
                  href="/"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Gallery
                </Link>
                <Link
                  href="/t"
                  className="block text-sm text-gray-300 hover:text-gray-900"
                >
                  Tags
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold text-gray-200 mb-4">
                FOLLOW THE MAKERBLE STORY
              </h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <svg
                    class="w-6 h-6 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                      clip-rule="evenodd"
                    />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </Link>
                <Link href="#" className="text-red-600 hover:text-red-800">
                  <svg
                    class="w-6 h-6 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-pink-600 hover:text-pink-800">
                  <svg
                    class="w-6 h-6 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-400 hover:text-blue-600">
                  <svg
                    class="w-6 h-6 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-800 hover:text-blue-900">
                  <svg
                    class="w-6 h-6 text-gray-200 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-4">FOLLOW THE MAKERBILE STORY</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-red-600 hover:text-red-800">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-pink-600 hover:text-pink-800">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-blue-800 hover:text-blue-900">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
