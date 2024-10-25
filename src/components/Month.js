import React from 'react';
import Day from './Day';
import "../App.css";

export default function Month({ month }) {
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5'>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} rowIdx={i} key={idx} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
