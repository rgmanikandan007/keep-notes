import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Notecard = ({note, onEdit}) => {  
  return (
    <div className='bg-white p-4 m-2 rounded shadow'>
        <h2 className='text-xl font-bold'>{note.title}</h2>
        <p>{note.description}</p>

        <div className='flex justify-end mt-2'>
            <button className='text-blue-500 mr-2 cursor-pointer' onClick={() => onEdit(note)}>
                <FaEdit/>
            </button>
            <button className='text-red-600 cursor-pointer'>
                <FaTrash/>
            </button>
        </div>
    </div>
  )
}

export default Notecard