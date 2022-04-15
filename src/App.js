import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddModal from "./components/AddModal";
import Home from "./pages/Home";


export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-full max-w-3xl mx-auto mt-8">
      <Navbar modalVisibility={() => setShowModal(true)} />
      { showModal && <AddModal setModalVisible={(bool) => setShowModal(bool)}/> }
      <div className="py-10 flex justify-center">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/today" element={<Home />} />
            <Route path="/this-week" element={<Home />} />
            <Route path="/this-month" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
