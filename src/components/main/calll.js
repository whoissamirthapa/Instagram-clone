import React, { useEffect, useState } from 'react'

const Calll = () => {

  const [a,setA] = useState();
  
  useEffect( ()=>{
    async function minus(){
      const b = await add();
      setA(b);
      //console.log(a);
    }
    minus();
  },[])
  return (
    <div>
      0fdf
    </div>
  )
}

export default Calll;

async function add(){
  const c = await fetch("https://practice1323124232-default-rtdb.firebaseio.com/datahere.json");
  return c;
}
