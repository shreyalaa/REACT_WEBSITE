import React , {useState} from "react"

const Practice = () =>{
    const [greet , setGreet] =useState("hello")
    const [bg , setBg] = useState("purple")
     return(
         <div style = {{backgroundColor: bg}}>
             <button onClick = {()=>{setGreet("bye") ;setBg("red")}}>{greet}</button>
         </div>
     )
     
}

export default Practice