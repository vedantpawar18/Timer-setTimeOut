import React, { useEffect, useState } from 'react'

const SetTimeOut = () => {
    const [count, setCount] =useState(0);

    useEffect (() =>{
        setTimeout(()=>{
            setCount(count+1);
        }, 1000);
    },[count]);
  return (
    <div>
        <h1>Counter : {count}</h1>
        <h3>Update time</h3>
    </div>
  )
}

export default SetTimeOut