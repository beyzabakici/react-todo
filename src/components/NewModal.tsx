export default function NewModal() {
  return (
    <div className="">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Vertically centered modal
      </button>
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenteredScrollable"
      >
        Vertically centered scrollable modal
      </button>
    </div>
  );
}
