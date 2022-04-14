import { useState } from "react";
import { CheckIcon, SparklesIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TodoCard({ event }: any) {
  const [selected, setSelected] = useState<boolean>(false);
  const [marked, setMarked] = useState<boolean>(false);
  return (
    <div className="relative pb-8">
      <button
        className="relative flex space-x-3"
        onClick={() => setSelected(!selected)}
        onDoubleClick={() => setMarked(!marked)}
      >
        <div>
          <span
            className={classNames(
              selected ? "bg-green-500" : "bg-gray-200",
              "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
            )}
          >
            {selected && (
              <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
            )}
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
          <div>
            <p className="text-sm text-gray-500">
              {event.content}{" "}
              <a href={event.href} className="font-medium text-gray-900">
                {event.target}
              </a>
            </p>
          </div>
          <div className="text-right text-sm whitespace-nowrap text-gray-500">
            <time dateTime={event.datetime}>{event.date}</time>
          </div>
          {marked && (
            <SparklesIcon
              className="h-5 w-5 text-yellow-300 rounded-full flex items-center justify-center "
              aria-hidden="true"
            />
          )}
        </div>
      </button>
    </div>
  );
}
