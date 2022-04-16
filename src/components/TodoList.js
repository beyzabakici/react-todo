import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  return (
    <div className="flow-root px-4 pt-2">
      <ul className="-mb-8">
        {todos.map((event) => (
          <li className="list relative pb-8" key={event.id}>
            <span class="line absolute top-4 left-4 -ml-px w-0.5 bg-gray-200" />
            <TodoCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
