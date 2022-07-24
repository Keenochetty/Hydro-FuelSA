import React from "react";

function Header() {
  return (
    <header className="bg-white dark:bg-white">
      <nav className="border-b dark:border-gray-700">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                <img
                  className="h-10"
                  src="/images/Logohorizontal.png"
                  alt="icon"
                />
              </a>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="Toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className="items-center lg:flex">
            <div className="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:-px-8">
              <a
                className="block font-medium text-gray-700 dark:text-grey-800 lg:mx-8 hover:text-gray-900 dark:hover:text-black hover:underline"
                href="/"
              >
                Home
              </a>
              <a
                className="block font-medium text-gray-700 dark:text-grey-800 lg:mx-8 hover:text-gray-900 dark:hover:text-black hover:underline"
                href="dashboard"
              >
                Dashboard
              </a>
              <a
                className="block font-medium text-gray-700 dark:text-grey-800 lg:mx-8 hover:text-gray-900 dark:hover:text-black hover:underline"
                href="whyhho"
              >
                Why HHO?
              </a>
              {/* <a
                className="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
                href="contact"
              >
                Contact
              </a> */}
              <a href="contact">
                <button className="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Get in touch
                </button>
              </a>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
