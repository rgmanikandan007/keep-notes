import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Notemodal from "./Notemodal";
import axios from "axios";
import Notecard from "./Notecard";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null)
  const [query, setQuery] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(false)

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())) ||
      notes.filter((note) => note.description.toLowerCase().includes(query.toLowerCase()))
    )
  },[query, notes])

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
      console.error("Error Editing note:", err);
    }
  }

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/note/${id}`);
      if (response.data.success) {
        console.log("done");   
        closeModal()
        window.location.reload()
      }
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  }

  return (
    <div>
      <Navbar setQuery={setQuery}/>

      <div className="grid grid-cols-1 md:grid-cols-4">
        {filteredNotes.length > 0 ? filteredNotes.map((note) => (
          <Notecard note={note} onEdit={onEdit} deleteNote={deleteNote}/>
        )) : <p>No Notes</p>}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 bottom-4 cursor-pointer text-2xl bg-teal-500 text-white font-bold p-4 rounded-full"
      >
        +
      </button>
      {modalOpen && <Notemodal closeModal={closeModal} addNote={addNote} currentNote={currentNote} editNote={editNote} deleteNote={deleteNote}/>}
    </div>
  );
};

export default Home;

