import React, { useState, useEffect} from "react";
import TodoList from "../components/TodoList";
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    decidePageTitle(location.pathname)
  }, [location]);

  const decidePageTitle = (path) => {
    if (path.includes('this-month')) {
      setPageTitle('This month');
    } else if (path.includes('this-week')) {
      setPageTitle('This week')
    } else if (path.includes('favorites')) {
      setPageTitle('Favorites')
    } else {
      setPageTitle('Today')
    }
  }

  return (
    <div>
      <h1 className="pb-6 text-lg">{ pageTitle }</h1>
      <TodoList />
    </div>
  );
};

export default Home;
