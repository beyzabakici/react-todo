import React, { useState, useEffect} from "react";
import TodoList from "../components/TodoList";
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";

const Home = () => {
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  const todos = useSelector((state) => state.todos);
  const favorites = useSelector((state) => state.todos.filter(todo => todo.isFavoriteItem === true));
 
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
    <>
      <h1 className="pb-6 text-lg">{ pageTitle }</h1>
      <TodoList todos={pageTitle.includes('favorites')? favorites : todos}/>
    </>
  );
};

export default Home;
