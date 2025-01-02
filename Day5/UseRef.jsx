import { useEffect,useRef,useState } from "react";
var UseRef=()=>{
    var[text,settext]=useState("");
    var prevtext=useRef();
    useEffect(()=>{
        prevtext.current=text
    },[text])
    return(
        <div>
            <h1>This is example of UseRef</h1>
            <input type="text" value={text} onChange={(e)=>settext(e.target.value)}></input>
            <h3>My current render is{text}</h3>
            <h3>prevoius render is{prevtext.current}</h3>

        </div>
    )
}
export default UseRef;