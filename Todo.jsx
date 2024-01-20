import React, { useState } from 'react'

const Todo = () => {
  const[Inp,SetInp]=useState()
  const[ClickedDatas,SetClickedDatas]=useState([])
  const InputEvent=(event)=>{
    SetInp(event.target.value)    
  }

  const Submit=()=>{
    SetClickedDatas((PreValue)=>{
      return[...PreValue,Inp]
    })
    SetInp("")
  }

  const Delete=(id)=>{
    const del=ClickedDatas.filter((elem,ind)=>{
      return ind !== id;
    })
    SetClickedDatas(del)
  }

  const deleteAll=()=>{
    SetClickedDatas([])
  }
  


  return (
    <div>
      <h1>TODO</h1>
      <input type="text" name="" id="" onChange={InputEvent} value={Inp} />
      <button onClick={Submit}>Add</button>
      {ClickedDatas.map((val,ind)=>{
        return(
          <>
          <li key={ind} >{val}<button onClick={()=>Delete(ind)}>Del</button></li>
          </>
        )
      })}
      <button className='btn btn-danger' onClick={deleteAll}>Delete All</button>
    </div>
  )
}

export default Todo;
