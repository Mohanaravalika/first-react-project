function App2(){
    function dispalyMessage(num) {
        alert("button clicked:"+ num)
    }
    return(
        <button onClick={()=>dispalyMessage(3)}>Click me</button>
    )

}

export default App2