import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Notemodal from "./Notemodal";
import axios from "axios";
import Notecard from "./Notecard";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/note");
        setNotes(data.notes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotes();
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const onEdit = (note) => {
    setCurrentNote(note)
    setModalOpen(true)
  }

  const addNote = async (title, description) => {
    try {
      const response = await axios.post("http://localhost:5000/api/note/add", {
        title,
        description,
      });
      if (response.data.success) {
        console.log("done");    
        closeModal();
      }
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/note/${id}`, {
        id,
        title,
        description,
      });
      if (response.data.success) {
        console.log("done");   
        closeModal();
      }
    } catch (err) {
      console.error("Error adding note:", err);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4">
        {notes.map((note) => (
          <Notecard note={note} onEdit={onEdit}/>
        ))}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 bottom-4 cursor-pointer text-2xl bg-teal-500 text-white font-bold p-4 rounded-full"
      >
        +
      </button>
      {modalOpen && <Notemodal closeModal={closeModal} addNote={addNote} currentNote={currentNote} editNote={editNote} />}
    </div>
  );
};

export default Home;

