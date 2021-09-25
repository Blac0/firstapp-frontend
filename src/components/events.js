import { useState } from "react";

const EventHandling =() => {
    let name1 = "Arunim";
    let c=0;
    const [count, setCount]= useState(0);
       const userdetails = {
        name : "Arunim" ,
        mail : "arunim@gmail.com",
        passw : "5555",

   }
   const addNum= (a,b) =>{
       return a+b;
   }
   const myHandClick = () =>{
       alert("ButtonClicked");
   }
   const updateVar = () => {
       setCount(count  + 1 );
   }
    return(
        <div className ="container mt-5">
        <h1>{userdetails.name }</h1>
        <h2 className = "text-muted"> </h2>
        <h2>Sum of 34 and 344 :{addNum(34,344)}</h2>
        
        <button className ="btn btn-outline-primary" onClick ={() => {console.log("button clicked")}}>Click it!</button>
        <button className ="btn btn-outline-primary" onClick ={myHandClick}>Click it!</button>
        <br/>
        <h1>{count}</h1>
        <button className ="btn btn-danger" onClick ={updateVar}>+</button>
        </div>
    )

    
}
export default EventHandling;