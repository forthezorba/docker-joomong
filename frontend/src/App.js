import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(()=>{
    axios.get(`/api/values`)
      .then(res=>{
        console.log('res',res)
        setLists(res.data)
      })
  })

  const changeHandler = (e)=>{
    setValue(e.currentTarget.value)
  }
  
  const changeHandler = (e)=>{
    e.preventDefault();
    axios.post(`/api/value`,{value: value})
    .then(res=>{
      if(res.data.success){
        console.log('res',res)
        setLists([...lists,res.data])
        setValue('')
      }else{
        alert('INSERT DB FAIL')
      }

      console.log('res',res)
      setLists(res.data)
    })
  }

  useState[lists,setLists] = useState([])
  useState[value,setValue] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          {lists && lists.map((list,index)=>{
            <li key={index}>{list.value}</li>
          })}
          <br/>

          <form className="example" onSubmit={submitHandler}>
            <input 
              type="text"
              placeholder="input.."
              onChange={changeHandler}
            />
            <button type="submit">OK</button>  
          </form>  
        </div> 
      </header>
    </div>
  );
}

export default App;
