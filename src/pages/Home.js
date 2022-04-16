import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    decidePageTitle(location.pathname);
  }, [location]);

  const decidePageTitle = (path) => {
    if (path.includes("this-month")) {
      setPageTitle("This month");
    } else if (path.includes("this-week")) {
      setPageTitle("This week");
    } else if (path.includes("favorites")) {
      setPageTitle("Favorites");
    } else {
      setPageTitle("Today");
    }
  };

  const deciceTodos = (path) => {
    var curr = new Date();
    console.log(curr.toDateString());
    var firstday = new Date(
      curr.setDate(curr.getDate() - curr.getDay())
    ).getDate();
    var lastday = new Date(
      curr.setDate(curr.getDate() - curr.getDay() + 6)
    ).getDate();
    if (path.includes("this-month")) {
      return todos.filter(
        (todo) =>
          todo.date.toLocaleDateString(undefined, {
            month: "numeric",
          }) ==
          curr.getMonth() + 1
      );
    } else if (path.includes("this-week")) {
      return todos.filter(
        (todo) =>
          todo.date.toLocaleDateString(undefined, {
            month: "numeric",
          }) ==
            curr.getMonth() + 1 &&
          todo.date.toLocaleDateString(undefined, {
            day: "numeric",
          }) >= firstday &&
          todo.date.toLocaleDateString(undefined, {
            day: "numeric",
          }) <= lastday
      );
    } else if (path.includes("favorites")) {
      return todos.filter((todo) => todo.isFavoriteItem === true);
    } else {
      return todos;
    }
  };

  return (
    <>
      <h1 className="pb-6 text-lg">{pageTitle}</h1>
      <TodoList todos={deciceTodos(location.pathname)} />
    </>
  );
};

export default Home;
