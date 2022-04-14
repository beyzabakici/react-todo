import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Today from './components/Today'
import { useState } from 'react';
import NewModal from './components/NewModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState<Boolean>(false);
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <NewModal />
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <Sidebar />
            <Today />
          </div>
        </div>
      </div>
    </>
  )
}
