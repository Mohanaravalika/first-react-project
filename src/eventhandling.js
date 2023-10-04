import React from "react";
class App extends React.Component {
    state= {
        product: "iphone",
        price : 10
    }
    render() {
        return {
            <>
                <h1>Product:{this.state.product}</h1>
                <p>Price:{this.state.price}</p>

                <input id='price' type="number" />
                <Button onClick={()=>{
                    let p=document.getElementById{'price'}.value;
                    console.log(p);
                    this.setState{(
                        price:p
                    )}
                }}>Update</Button>
            </>
        }
    }
}

export default eventhandling