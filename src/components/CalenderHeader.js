import React, { useContext } from 'react'
import logo from "../assets/img/logo.png"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';


export default function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1)
  }
  function handleReset() {
    setMonthIndex(dayjs().month())
  }

  return (
    <header className='px-4 py-2 flex items-center'>
      <img src={logo} alt='calendar' className='mr-2 w-12 h-12' />
      <h1 className='mr-10 text-xl text-gray-800 font-bold'>Calendar</h1>
      <button
        onClick={handleReset}
        className='border rounded py-2 px-4 mr-5 hover:shadow-md'
      >
        Today
      </button>


      <button onClick={handlePrevMonth} className='material-icons-outlined cursor-pointer text-gray-900 mx-2'>
        <ChevronLeftIcon />
      </button>
      <button onClick={handleNextMonth} className='material-icons-outlined cursor-pointer text-gray-900 mx-2'>
        <ChevronRightIcon />
      </button>
      <h2 className='ml-4 text-xl text-gray-600 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  )
}