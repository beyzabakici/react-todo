import { useState } from "react";
import { CheckIcon, SparklesIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  onComplete,
  removeFavorite,
  undoComplete,
} from "../features/todoSlice";

export default function TodoCard({ event }) {
  const [selected, setSelected] = useState(event.isCompleted);
  const [marked, setMarked] = useState(event.isFavori);
  const dispatch = useDispatch();

  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"

  };
  const onFavoriteItem = () => {
    if (marked) {
      dispatch(removeFavorite(event.id));
    } else {
      dispatch(addFavorite(event.id));
    }
    setMarked(!marked);
  };
  const onMarkItem = () => {
    if (selected) {
      dispatch(undoComplete(event.id));
    } else {
      dispatch(onComplete(event.id));
    }
    setSelected(!selected);
  };

  const decideCheck = () => {
    return selected
      ? "bg-green-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
      : "bg-gray-300 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white";
  };

  return (
    <>
      <button
        className="  flex space-x-3"
        onClick={() => onMarkItem()}
        onDoubleClick={() => onFavoriteItem()}
      >
        <span className={decideCheck()}>
          {selected && (
            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
          )}
        </span>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p className="text-sm text-gray-500 todo-content">
              {event.content}{" "}
              <span className="font-medium text-gray-900">{event.content}</span>
            </p>
          </div>
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            <time dateTime={event.date}>
              {event.date}
            </time>
          </div>
          {marked && (
            <SparklesIcon
              className="h-5 w-5 text-yellow-300 rounded-full flex items-center justify-center "
              aria-hidden="true"
            />
          )}
        </div>
      </button>
    </>
  );
}
