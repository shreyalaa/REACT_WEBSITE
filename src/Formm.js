import { useState } from "react"
import "./Formm.css"
const Formm = () =>{
    const [fullName , setFullName] = useState({
        fname: "",
        lname:"",
        email:"",
        phoneNumber:""
    })

    const handleSubmit = (event) =>{
        event.preventDefault()
        alert(fullName.fname + fullName.lname)
        
    }
    
    const handleInput = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setFullName((prevVal)=>{
            if(name === "fname"){
                return{
                    fname:value,
                    lname: prevVal.lname,
                    email: prevVal.email,
                    phoneNumber: prevVal.phoneNumber
                }
            }
            else if(name === "lname"){
                return{
                    fname: prevVal.fname,
                    lname: value,
                    email: prevVal.email,
                    phoneNumber: prevVal.phoneNumber
                }
            }
            else if(name === "email"){
                return{
                    email: value,
                    fname: prevVal.fname,
                    lname: prevVal.lname,
                    phoneNumber: prevVal.phoneNumber
                }
            }
            else if(name === "phoneNumber"){
                return{
                    phoneNumber: value,
                    fname: prevVal.fname,
                    lname: prevVal.lname,
                    email: prevVal.email
                }
            }
        })
    }

   
    return(
    <div className= "formm">
        <div className = "form">
            <form onSubmit = {handleSubmit}>
                <h1>Welcome {fullName.fname} {fullName.lname}</h1>
                <br/>
                <input type = "text"
                    name ="fname"
                    onChange ={handleInput}
                    placeholder = "enter your name"
                    value = {fullName.fname}
                    >
                    
                </input>
                <br/>
                <input type = "text"
                    name = "lname"
                    onChange ={handleInput}
                    placeholder = "enter your last name"
                    value = {fullName.lname}
                    >
                    
                </input>
                <br/>
                <input type = "email"
                    name = "email"
                    onChange ={handleInput}
                    placeholder = "enter your email"
                    value = {fullName.email}
                    >
                    
                </input>
                <br/>
                <input type = "number"
                    name = "phoneNumber"
                    onChange ={handleInput}
                    placeholder = "enter your phone number"
                    value = {fullName.phoneNumber}
                    >
                    
                </input>
                
                <button type = "submit">submit </button>
            </form>
        </div>
    </div>
    )
}

export default Formm