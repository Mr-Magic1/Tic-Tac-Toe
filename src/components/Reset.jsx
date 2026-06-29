import React, { useContext } from 'react'
import BoxContext, { BoxDataContext } from '../Context/BoxContext'

const Reset = ( {setWinner} ) => {
  const [Data , setData]=useContext(BoxDataContext)
  function ResetData(){
    const newData=[]
    Data.map((item)=>{
      newData.push({...item , val:''})
    })
    setData(newData)
    setWinner('')
  }
  return (
    <div className='flex justify-center'>
      <button 
      onClick={ResetData}
      className=' p-2 px-6 rounded-md active:scale-95 cursor-pointer bg-green-500'>Reset</button>
    </div>
  )
}

export default Reset