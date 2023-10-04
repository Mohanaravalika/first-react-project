import React from "React";

function incrementnumber(){
    let {counter, updateCounter} = useState(0)
    return(
        {
            <h1>Counter Value: {counter}</h1>
            <button onClick={()=>{updateCounter{**counter}}}>Change</button>
        }
    )
}

export default incrementnumber