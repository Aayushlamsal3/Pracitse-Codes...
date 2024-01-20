import React, { useState } from 'react'

const Form = () => {
  const[Datas,SetDatas]=useState({
    fullname:"",
    email:"",
    phone:""
  })
  const InputEvent=(event)=>{

    const{name,value}=event.target

    SetDatas((PreValue)=>{
      return{...PreValue,
        [name]:value
      }
    })

  }
  const submit=()=>{
    alert(`Your Name is:${Datas.fullname}and your email is ${Datas.email} with phone number ${Datas.phone}`)
  }
  return (
    <div>
      <input type="text" name="fullname" id="" onChange={InputEvent} value={Datas.fullname} />
      <div>
        <input type="text" name="email" id="" onChange={InputEvent} value={Datas.email} />
      </div>
      <div>
        <input type="text" name="phone" id="" onChange={InputEvent} value={Datas.phone} />
      </div>
      <button onClick={submit}>add</button>
    </div>
    
  )
}

export default Form;
