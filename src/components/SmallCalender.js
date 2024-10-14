// import dayjs from 'dayjs';
// import React, { useEffect, useState } from 'react';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import getMonth from "../util";

// export default function SmallCalender() {
//     const [currentMonthIdx, setCurrentMonthIdx] = useState(
//         dayjs().month()
//     );
//     // const [currentMonth, setCurrentMonth] = useState(getMonth())
//     // useEffect(() => {
//     //     setCurrentMonth(getMonth(currentMonthIdx))
//     // }, [currentMonthIdx])

//     function handlePrevMonth() {
//         setCurrentMonthIdx(currentMonthIdx - 1)
//     }
//     function handleNextMonth() {
//         setCurrentMonthIdx(currentMonthIdx + 1)
//     }
//     return (
//         <div className='mt-9 '>
//             <header className='flex justify-between '>

//                 <button onClick={handlePrevMonth} className='material-icons-outlined cursor-pointer text-gray-900 mx-2'>
//                     <ChevronLeftIcon />
//                 </button>
//                 <button onClick={handleNextMonth}className='material-icons-outlined cursor-pointer text-gray-900 mx-2'>
//                     <ChevronRightIcon />
//                 </button>
//             </header>
//         </div>
//     )
// }
