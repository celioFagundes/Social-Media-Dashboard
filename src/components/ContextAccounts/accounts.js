import React ,{createContext,useState,useContext}from 'react'

const AccountsContext = createContext();

export default function AccountsListContext({children}) {

    const [accountsList,setAccountsList] = useState([]);
    
    return (
        <AccountsContext.Provider value = {{accountsList,setAccountsList}}>
            {children}
        </AccountsContext.Provider>
    )
}

export function useAccountsList(){
    const context = useContext(AccountsContext);
    const {accountsList,setAccountsList} = context;
    return {accountsList,setAccountsList};
}
