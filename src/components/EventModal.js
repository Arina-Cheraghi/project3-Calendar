import React, { useContext, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { MdDragHandle } from "react-icons/md";
import GlobalContext from '../context/GlobalContext';
import { MdSchedule } from "react-icons/md";
import { MdOutlineSegment } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const labelClasses = ["gray", "purple", "pink"];

export default function EventModal() {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelClasses.find((lbl) => lbl === selectedEvent.label)
            : labelClasses[0]
    );

    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }

        setShowEventModal(false);
    }

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4 '>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='text-gray-400'>
                        <MdDragHandle />
                    </span>

                    <div>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });
                                    setShowEventModal(false);
                                }}
                                className="material-icons-outlined text-gray-400 cursor-pointer"
                            >
                                delete
                            </span>
                        )}
                        <button type="button" onClick={() => setShowEventModal(false)}>
                            <span className='text-gray-400'>
                                <IoMdClose />
                            </span>
                        </button>
                    </div>

                </header>
                <div className='p-3'>
                    <div className='grid grid-cols-1/5 items-end gap-y-7'>
                        <div></div>
                        <input
                            type='text'
                            name='title'
                            placeholder='Add title'
                            value={title}
                            required
                            className='p-3 border-0 text-gray-900 text-xl font-semibold pb-2 w-full border-b-2 border-pink-200 focus:outline-none focus:ring-0 focus:border-gray-600'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className='flex items-center text-gray-600'>
                            <MdSchedule />
                            <p className='mx-2 text-sm'>
                                {daySelected.format("dddd, MMMM, DD")}
                            </p>
                        </div>
                        <div className='flex items-center '>
                            <MdOutlineSegment />
                            <input
                                type='text'
                                name='description'
                                placeholder='Add description'
                                value={description} // اصلاح شده
                                required
                                className='p-3 border-0 text-gray-900 text-sm pb-2 w-full border-b-2 border-pink-200 focus:outline-none focus:ring-0 focus:border-gray-600'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center'>
                            <CiBookmarkCheck />
                            <div className='mx-3 flex gap-x-2'>
                                {labelClasses.map((lblClass, i) => (
                                    <span key={i}
                                        onClick={() => setSelectedLabel(lblClass)}
                                        className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                        {selectedLabel === lblClass && (
                                            <span className='text-white text-xs'>
                                                <FaCheck />
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='flex justify-end w-100 border-t p-3 mt-5'>
                    <button onClick={handleSubmit} type='submit' className='bg-purple-400 hover:bg-purple-700 px-6 py-2 rounded text-white'>
                        Save
                    </button>
                </footer>
            </form>
        </div>

    );
}
