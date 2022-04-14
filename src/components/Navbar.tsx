import { SearchIcon } from "@heroicons/react/solid";

import { PlusSmIcon } from "@heroicons/react/outline";

export default function Navbar({ setModalVisible }: any) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className=" flex items-center  xl:grid xl:grid-cols-12 lg:gap-8">
          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
              <div className="w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flow-root">
            <div className="flex-shrink-0  ">
              <button
                type="button"
                className="inline-flex items-center px-5 py-2 rounded-full bg-purple-50 text-sm font-medium text-purple-700 hover:bg-purple-100"
                onClick={setModalVisible(true)}
              >
                <PlusSmIcon
                  className="-ml-1 mr-0.5 h-5 w-5 text-purple-400"
                  aria-hidden="true"
                />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
