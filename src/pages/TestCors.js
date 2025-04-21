import { useEffect, useState } from 'react';

function TestCors() {
  const makeAPICall = async () => {
    try {
      fetch('http://127.0.0.1:8000/api/records', {
            mode: 'no-cors',
            method: "get",
            headers: {
                 "Content-Type": "application/json"
            }
            
 })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div >
      <h1>React Cors Guide</h1>
    </div>
  );
}
export default TestCors;