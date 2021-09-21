import React ,{createContext,useState,useContext}from 'react'

const TotalContext = createContext();

export default function TotalProvider({children}) {

    const [totalFollowers,setTotalFollowers] = useState(0);
    
    return (
        <TotalContext.Provider value = {{totalFollowers,setTotalFollowers}}>
            {children}
        </TotalContext.Provider>
    )
}

export function useCountFollowers(){
    const context = useContext(TotalContext);
    const {totalFollowers,setTotalFollowers} = context;
    return {totalFollowers,setTotalFollowers};
}
