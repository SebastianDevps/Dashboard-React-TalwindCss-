import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { RiMenu3Fill,RiCloseLine } from 'react-icons/ri'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6 ">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar}/>
      {/* Btn menu movil */}
      <button onClick={handleSidebar} className='block lg:hidden fixed bottom-4 right-4 cursor-pointer z-40 bg-purple-600 p-2 text-white rounded-full text-2xl'>
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Content */}
      <Content />
    </div>
  )
}

export default App
