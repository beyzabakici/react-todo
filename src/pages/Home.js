import TodoList from "../components/TodoList";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import EmptyState from "../components/EmptyState";

const Home = () => {
  const location = useLocation();
  const todos = useSelector((state) => state.todos);

  const filteredList = (type) => {
    if (type === "favorites") {
      return todos.filter((todo) => todo.isFavoriteItem === true);
    }
    return todos.filter((todo) => moment().isSame(todo.date, type));
  };

  const deciceTodos = (path) => {
    const type = path.includes("this-week")
      ? "week"
      : path.includes("this-month")
      ? "month"
      : path.includes("favorites")
      ? "favorites"
      : "day";

    return filteredList(type);
  };

  return deciceTodos(location.pathname).length ? (
    <TodoList todos={deciceTodos(location.pathname)} />
  ) : (
    <EmptyState />
  );
};

export default Home;
