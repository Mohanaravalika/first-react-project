import './App.css'

function Bgcolorchange(){
    return(
        <div className='Wrapper'>
            <h1>Back Ground color changer</h1>
            <input type='color' onChange={
                (e)=>{
                    document.body.style.background = e.target.value
                }
            } /> 
        </div>
    )
}

export default Bgcolorchange