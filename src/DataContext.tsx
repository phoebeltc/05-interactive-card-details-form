import React, { createContext, useContext, useState } from 'react'

type DataContextType = {
    name: string; 
    setName: React.Dispatch<React.SetStateAction<string>>;
    cardNumber: string; 
    setCardNumber: React.Dispatch<React.SetStateAction<string>>;
    cvc: string;
    setCvc: React.Dispatch<React.SetStateAction<string>>;
    month: string;
    setMonth: React.Dispatch<React.SetStateAction<string>>;
    year: string;
    setYear: React.Dispatch<React.SetStateAction<string>>;
}

type DataContextProviderProprs = {
    children: React.ReactNode
}

const DataContext = createContext({} as DataContextType)

export const DataProvider = ({ children }: DataContextProviderProprs) => {
    const[name, setName] = useState('');
    const[cardNumber, setCardNumber] = useState('');
    const[cvc, setCvc] = useState('');
    const[month, setMonth] = useState('');
    const[year, setYear] = useState('');
    return<>
    <DataContext.Provider 
        value={{
            name, setName, cardNumber, setCardNumber, cvc, setCvc, month, setMonth, year, setYear
            }}>
            {children}
    </DataContext.Provider>
    </>
} 

export const useDataContext = () => {
    return useContext(DataContext)
}