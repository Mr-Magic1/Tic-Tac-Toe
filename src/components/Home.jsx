import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { BoxDataContext } from '../Context/BoxContext'
import Box from './Box'
import Reset from './Reset'

const Home = () => {
    const [Data , setData] = useContext(BoxDataContext)
    const [turn, setturn] = useState('X')
    const [Winner, setWinner] = useState('')

    useEffect(() => {
      console.log(Data);
      console.log(turn);
      
    }, [Data])
    
  return (
    <div className='w-full h-188  bg-black text-white flex flex-col justify-center items-center gap-20 '>
        <Header Winner={Winner} setWinner={setWinner} />
        <section className="w-full flex justify-center  gap-0.05">
            <div>
                {Data.map((elem)=>{
                    if (elem.row==1){
                        return <Box key={elem.id} Winner={Winner} elem={elem} turn={turn} setturn={setturn}/>
                    }
                })}
            </div>
            <div>
                {Data.map((elem)=>{
                    if (elem.row==2){
                        return <Box key={elem.id} Winner={Winner} elem={elem} turn={turn} setturn={setturn}/>
                    }
                })}
            </div>
            <div>
                {Data.map((elem)=>{
                    if (elem.row==3){
                        return <Box key={elem.id} Winner={Winner} elem={elem} turn={turn} setturn={setturn}/>
                    }
                })}
            </div>
        </section>
        <Reset setWinner={setWinner} />
    </div>
  )
}

export default Home