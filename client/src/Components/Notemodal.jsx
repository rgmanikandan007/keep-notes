import React, { useEffect, useState } from "react";

const Notemodal = ({closeModal,addNote,currentNote,editNote}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if(currentNote){
      setTitle(currentNote.title)
      setDescription(currentNote.description)
    }
  }, [currentNote])


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(currentNote){
      editNote(currentNote._id, title, description)
      window.location.reload()
    } else {
      addNote(title, description)
      window.location.reload()
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <h2 className="text-xl font-bold mb-4">{currentNote ? "Edit Note" : "Add New Note"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="border p-2 w-full mb-4"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
            className="border p-2 w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
          >
          {currentNote ? "Update Note" : "Add Note"}
          </button>
        </form>
        <button className="mt-4 text-red-500 cursor-pointer" onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default Notemodal;
