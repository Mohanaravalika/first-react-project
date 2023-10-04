import React from 'react';
import './index.js';
import './App.css';
import User from './prop.js'


function App() {
  let styling={
    color:"pink"
  }

  let users=[
    {
    id:2,
    name:'Tanuja',
    age:'3'
    },
    {
      id:4,
      name:'Lavanya',
      age:'10'
    }
  ]

  return (
    <div className="App">
      <input type="checkbox" id='sub' />
      <label htmlFor='sub'>subscribe</label>
      <h1 style={styling}>Hello World</h1>
      <h3>expression:{7+5}</h3>
     <>
     {
       users.map(
         (u) => {
          return <User key={u.id} id={u.id} name={u.name} age={u.age} />
          }
       )
    }
     </>
     </div>

    

)
}

export default App
