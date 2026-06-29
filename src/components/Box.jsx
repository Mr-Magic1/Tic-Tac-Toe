import React, { useContext } from 'react'
import { BoxDataContext } from '../Context/BoxContext'
  let urlO=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VtCervuL-OxWANAVkybWihgXTmTyVO-7RcbV6troaA&s=10`
  let urlX=`https://media.istockphoto.com/id/1276735653/vector/cross-sign-red-hand-drawn-brush-paint-x-letter-handwritten-criss-cross-symbol-painted.jpg?s=612x612&w=0&k=20&c=ldv6LXaUuUoTvfM4539exm4zKFEfthZJNBc-gKHCGgg=`

const Box = ( {elem , turn , setturn , Winner} ) => {

  const [Data , setData]=useContext(BoxDataContext)

  function handleClick(){
    if (elem.val!="") return ;
    if (Winner!=""){
      alert("The game has been already finidhed . Kindly Reset the game to play again")
      return 
    }
    const newData=[]
    Data.map((item)=>{
      if (item.id==elem.id){
        if (turn=='X'){
          setturn('O')
          newData.push({...item , val:turn})
        }
        else{
          setturn('X')
          newData.push({...item , val:turn})
        }

        
      }
      else{
        newData.push(item)
      }
    })
    setData(newData)
  }
  return (
    <div 
    onClick={handleClick}
    className='bg-white h-30 w-30 m-2 cursor-pointer' >
        <img src={ (elem.val=='') ? '' : (elem.val=='X') ? urlX : urlO } 
        alt="" />
    </div>
  )
}

export default Box