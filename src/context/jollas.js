import {createContext,useState} from 'react';
import {data} from '../data'

const JollasContext = createContext(null)

const JollasProvider = ({children}) =>{
    const [jollas ,setJollas] =useState(data)

    return (
        <JollasContext.Provider value={jollas}>
           {children}
        </JollasContext.Provider>
    )

}

export{JollasContext ,JollasProvider}