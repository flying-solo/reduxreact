import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'


function HooksCakeContainer() {
    const numOfCakes = useSelector((state: any) => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [number,setNumber]=useState()
  return (
    <div>
      <h2>(with hooks) No. of cakes - {numOfCakes}</h2>
      <input type="text" value={number} onChange={(e: any)=>setNumber(e.target.value)} />
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
    </div>
  )
}

export default HooksCakeContainer;