import React, { Children, createContext } from 'react'



const ContexApi = () => {
    const BioContext = createContext();
    const myName="naeem" ;
  return (
    <BioContext.Provider value={myName}>
        {Children}
    </BioContext.Provider>
  )
}

export default ContexApi
