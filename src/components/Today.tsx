import TodoList from "./TodoList";

export default function Today() {
  return (
    <div className="hidden lg:block xl:col-span-9">
      <h1 className="pb-6">Today</h1>
      <TodoList />
    </div>
  );
}
