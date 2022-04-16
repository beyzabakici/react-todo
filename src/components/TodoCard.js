import { CheckIcon, SparklesIcon, XIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {
  remove,
  addFavorite,
  onComplete,
  removeFavorite,
  undoComplete,
} from "../features/todoSlice";
import moment from "moment";

export default function TodoCard({ event }) {
  const dispatch = useDispatch();

  const onFavoriteItem = () => {
    if (event.isFavoriteItem) {
      return dispatch(removeFavorite(event.id));
    }

    dispatch(addFavorite(event.id));
  };
  
  const onMarkItem = () => {
    if (event.isCompleted) {
      return dispatch(undoComplete(event.id));
    }

    dispatch(onComplete(event.id));
  };

  const onRemoveItem = () => {
    return dispatch(remove(event.id));
  };

  const decideCheck = () => {
    return event.isCompleted
      ? "bg-green-400 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
      : "bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white";
  };

  return (
    <div className="flex justify-between items-center ">
      <button
        className=" relative flex space-x-3"
        onClick={() => onMarkItem()}
        onDoubleClick={() => onFavoriteItem()}
      >
        <span className={decideCheck()}>
          {event.isCompleted && (
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
              {moment(event.date).format("DD MMMM YYYY ")}
            </time>
          </div>
          <div>
            {event.isFavoriteItem && (
              <SparklesIcon
                className="h-5 w-5 text-yellow-300 rounded-full flex items-center justify-center "
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </button>
      <button onClick={() => onRemoveItem()}>
        <XIcon className="h-5 w-5 text-gray-300 hover:text-red-600" />
      </button>
    </div>
  );
}
