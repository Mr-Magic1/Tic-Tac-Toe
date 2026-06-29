import React, { useContext, useEffect, useState } from 'react'
import { BoxDataContext } from '../Context/BoxContext'

const Header = ( { Winner , setWinner } ) => {
  const [Data , setData]=useContext(BoxDataContext)
  function getWinner(){
    for (let i=1;i<=3;i++){
      let xrow=[]
      let xcol=[]
      let xdiag=[]
      let xdiag2 = [];
      Data.forEach(item => {
        if (item.row==i){
          xrow.push(item.val)
        }
        if (item.col==i){
          xcol.push(item.val)
        }
        if (item.row==item.col){
          xdiag.push(item.val)
        }
        if (item.row + item.col==4){
          xdiag2.push(item.val)
        }
      });
      if (xrow[0] !== "" && xrow[0]==xrow[1] && xrow[0]==xrow[2]){
        setWinner(xrow[0])
        return 
      }
      if (xcol[0] !== "" && xcol[0]==xcol[1] && xcol[0]==xcol[2]){
        setWinner(xcol[0])
        return 
      }
      if (xdiag[0] !== "" && xdiag[0]==xdiag[1] && xdiag[0]==xdiag[2]){
        setWinner(xdiag[0])
        return 
      }
      if (xdiag2[0] !== "" && xdiag2[0]==xdiag2[1] && xdiag2[0]==xdiag2[2]){
        setWinner(xdiag2[0])
        return 
      }
    }

  }
  useEffect(() => {
    getWinner()
    console.log(Winner)
    const full = Data.every(item => item.val !== "");
    if (Winner === "" && full) {
        alert("Game Draw. Kindly Reset the game.");
    }
  }, [Data])
  
  return (
    <div className='w-full'>
      <h1 align="center" className='font-semibold text-3xl'> The Winner is :  {Winner}</h1>
    </div>
  )
}

export default Header