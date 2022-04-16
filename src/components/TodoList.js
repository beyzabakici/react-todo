import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {todos.map((event) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {/* {event !== todos[todos.length - 1] ? (
                <span
                  className=" top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null} */}
              <TodoCard event={event} />
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
