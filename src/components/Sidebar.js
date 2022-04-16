import {
  TableIcon,
  SparklesIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    decidePath(location.pathname);
  }, [location]);

  const decidePath = (path) => {
    if (path == location.pathname) {
      return "group flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-md bg-rose-50 text-rose-500";
    } else {
      return "group flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50";
    }
  };

  return (
    <div className="max-w-xs mr-8 hidden md:block">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-2">
          <Link to="/" className={[" ", decidePath("/")]}>
            <LocationMarkerIcon className="w-5 h-5 " />
            <span>Today</span>
          </Link>
          <Link to="/this-week" className={decidePath("/this-week")}>
            <TableIcon className="w-5 h-5 " />
            <span> This Week</span>
          </Link>
          <Link to="/this-month" className={decidePath("/this-month")}>
            <CalendarIcon className="w-5 h-5 " />
            <span> This Month</span>
          </Link>
          <Link to="/favorites" className={decidePath("/favorites")}>
            <SparklesIcon className="w-5 h-5 " />
            <span>Favorites</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
