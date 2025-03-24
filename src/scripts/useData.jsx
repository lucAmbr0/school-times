import React, { createContext, useState, useEffect } from 'react';
import Data from './Data';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setDataState] = useState(Data.loadFromLocalStorage());

    const setData = (newData) => {
        const dataInstance = newData instanceof Data ? newData : Object.assign(new Data(), newData);
        setDataState(dataInstance);
        dataInstance.saveToLocalStorage();
    };

    return (
        <DataContext.Provider value={[data, setData]}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = React.useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
