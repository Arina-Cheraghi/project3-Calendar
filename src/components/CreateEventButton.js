import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import GlobalContext from '../context/GlobalContext';

export default function CreateEventButton() {
    const {setShowEventModal} = useContext(GlobalContext)
    return (
        <button onClick={() => setShowEventModal(true)} className=' border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
            <FaPlus />
            <span className='px-3'>
                Create
            </span>
        </button>
    )
}
