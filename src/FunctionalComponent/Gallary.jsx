import { useState } from "react";

const Gallery = () => {
    var [counter,setcounter] = useState(0);

    const increment=()=>
    {
        setcounter(counter+1);
    }
    const decrement=()=>
        { 
            if(counter>=1)
             
            setcounter(counter-1);
        }
        const reset=()=>
            {
                setcounter(0);
            }

    return (
        <div>
            <section>
                <h1>This is Gallery Component</h1>
                <h2 style={{textAlign:"center"}}>Learning State Concept</h2>
                <h3>The State of my variable count is {counter}</h3>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
                <button onM></button>
            </section>
        </div>
    )
}
export default Gallery;