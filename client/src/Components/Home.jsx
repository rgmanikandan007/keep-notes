import React from 'react'
import Navbar from './Navbar'
import Notemodal from './Notemodal';
import { useState } from 'react';
import axios from 'axios'

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const closeModal = () => {
    setModalOpen(false)
  }

  const addNote = async (title, description) => {
    e.prevenDefault();
    try {
        const response = await axios.post(
            "http://localhost:5000/api/note/add", {title, description}
        );
        if(response.data.success){
            closeModal()
        }
    } catch(err) {
        console.log(err)
    }
  };

  return (
    <div>
      <Navbar/>

      <button onClick={()=> setModalOpen(true)} className='fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full'>
        +
      </button>
      {modalOpen && <Notemodal closeModal={closeModal} addNote={addNote} />}
    </div>
  )
}

export default Home