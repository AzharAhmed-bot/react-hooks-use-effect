import React, { useState, useEffect } from "react";

function App() {
  const[count, setCount]=useState(0)
  const[text,setText]=useState("")
  useEffect(() => {
    setTimeout(()=>setCount(0),1000)
  },[count]);
  useEffect(() => {
    document.title = text;
  }, [text])

  console.log("Component rendering");
 
function handleClick(){
  console.log("clicked")
 setCount(count=>count+1)
}
function handleChange(e){
  setText(e.target.value)
  console.log(e.target.value)
}
  return( 
  <div>
  <button onClick={handleClick}>I've been clicked {count} times</button>
  <input
  type="text"
  placeholder="Type away..."
  value={text}
  onChange={handleChange}
/>
</div>);
}

export default App;
