import TodoList from "./TodoList";

export default function Today() {
  return (
    <div className="hidden lg:block ">
      <h1 className="pb-6">Today</h1>
      <TodoList />
    </div>
  );
}
