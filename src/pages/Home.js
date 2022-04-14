import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NewModal from "../components/NewModal";
import Sidebar from "../components/Sidebar";
import Today from "../components/Today";

const Home = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <Today />
      {/* <NewModal
        modalVisible={modalVisible}
        setModalVisible={(r) => setModalVisible(r)}
      /> */}
    </div>
  );
};

export default Home;
