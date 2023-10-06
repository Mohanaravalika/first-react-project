import { useState } from 'react'
import './CountApp.css'



function CounterApp(){
    const[counter,setCounter]=(this.stock=10);

    return(
        <div className="Countstyle">
            <button className="minus" onClick={()=>{
                if(this.state.counter>0){
                    setCounter(this.state.counter-1)
                }
            }}>-</button>
            <p>{this.state.counter}</p>
            <button className="plus" onClick={()=>{
                if(this.state.counter<this.stock){
                    setCounter(this.state.counter+1)
                }
            }}>+</button>
        </div>
    )


}

export default CounterApp