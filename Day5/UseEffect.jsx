/* import { useEffect, useState } from "react";
var UseEffect=()=>{
    var[text,settext]=useState("Kongu");
    useEffect(()=>{
        settext("KEC");
        console.log(settext);
    },[])
    // const increment=(e)=>{
            // settext(e.terget.value)
     //}
    
    return (
        <div>
            <h1>Use effect  example</h1>
            <input type="text" 
            placeholder="Enter your text"
             value={text} 
            onChange={(e)=>{
                settext(e.target.value)
                }}/>
            <h2>text typed is {text}</h2>
        </div>
    )
}
export default UseEffect; */

import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Fetching Data from JSON Placeholder</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectComponent;
