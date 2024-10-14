import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [showEventModal, setShowEventModal] = useState(false);
    const [daySelected, setDaySelected] = useState(null);
    const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

    return (
        <GlobalContext.Provider value={{ showEventModal, setShowEventModal, daySelected, setDaySelected, monthIndex }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
