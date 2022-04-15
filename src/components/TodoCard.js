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

  return (
    <>
      <button
        className="  flex space-x-3"
        onClick={() => onMarkItem()}
        onDoubleClick={() => onFavoriteItem()}
      >
        <span
          className={[
            selected ? "bg-green-500" : "bg-gray-900",
            "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white",
          ]}
        >
          {selected && (
            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
          )}
        </span>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p className="text-sm text-gray-500 todo-content">
              {event.title}{" "}
              <span className="font-medium text-gray-900">{event.title}</span>
            </p>
          </div>
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            {/* <time dateTime={event.datetime}>{event.date}</time> */}
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
