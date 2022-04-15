import {
  TableIcon,
  SparklesIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full max-w-xs mr-8 hidden md:block">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          <Link
            to="/"
            className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md bg-gray-200 text-gray-900 "
          >
            <LocationMarkerIcon className="w-5 h-5 " />
            <span>Today</span>
          </Link>
          <Link
            to="/this-week"
            className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 "
          >
            <TableIcon className="w-5 h-5 " />
            <span> This Week</span>
          </Link>
          <Link
            to="/this-month"
            className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 "
          >
            <CalendarIcon className="w-5 h-5 " />
            <span> This Month</span>
          </Link>
          <Link
            to="/"
            className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 "
          >
            <SparklesIcon className="w-5 h-5 " />
            <span>Favorites</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
