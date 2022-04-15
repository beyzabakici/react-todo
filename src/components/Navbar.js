import { SearchIcon, MenuIcon } from "@heroicons/react/solid";
import { PlusSmIcon } from "@heroicons/react/outline";

const Navbar = (props) => {
  return (
    <div className="flex items-center md:px-0 px-4">
      <div className="min-w-0 flex-1 mr-8">
        <div className="flex items-center">
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
                className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 rounded-full bg-purple-50 text-sm font-medium text-purple-700 hover:bg-purple-100"
          onClick={() => props.modalVisibility()}
        >
          <PlusSmIcon className="h-5 w-5 text-purple-400" />
          <span>Add Todo</span>
        </button>
        <button>
          <MenuIcon className="h-5 w-5 ml-4 md:hidden text-gray-400" />
        </button>
    </div>
  );
};

export default Navbar;
