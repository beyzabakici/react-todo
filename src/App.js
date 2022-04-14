import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import ThisMonth from "./pages/ThisMonth";
import ThisYear from "./pages/ThisYear";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="min-h-full">
      <Navbar
        modalVisible={modalVisible}
        setModalVisible={(r) => setModalVisible(r)}
      />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/this-month" element={<ThisMonth />} />
              <Route path="/this-year" element={<ThisYear />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
