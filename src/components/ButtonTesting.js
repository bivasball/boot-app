import React, { useState } from 'react';  
  
const CountApp=()=> {  
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(2);  
  const changeit=()=>{
    setCount(count + 1*3);
  }
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={changeit }>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CountApp;  

