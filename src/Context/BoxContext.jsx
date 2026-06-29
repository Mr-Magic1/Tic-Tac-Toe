import React, { createContext, useState } from 'react'

export const BoxDataContext=createContext()

const BoxContext = (props) => {
   const [Data , setData]= useState([
    {
      id : 1,
      row : 1,
      col : 1,
      val : ''
    },
        {
      id : 2,
      row : 1,
      col : 2,
      val : ''
      },
        {
      id : 3,
      row : 1,
      col : 3,
      val : ''
    }  ,  {
      id : 4,
      row : 2,
      col : 1,
      val : ''
    }   , {
      id : 5,
      row : 2,
      col : 2,
      val : ''
    }   , {
      id : 6,
      row : 2,
      col : 3,
      val : ''
    }   , {
      id : 7,
      row : 3,
      col : 1,
      val : ''
    }   , {
      id : 8,
      row : 3,
      col : 2,
      val : ''
    }   , {
      id : 9,
      row : 3,
      col : 3,
      val : ''
    }
   ])
  return (
    <BoxDataContext.Provider value={[Data , setData]}>
        {props.children}
    </BoxDataContext.Provider>
  )
}

export default BoxContext