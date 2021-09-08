const Greeting = () =>{
    let greeting = ""
    let getD = new Date()
    getD = getD.getHours()


    if(getD >1 && getD <12){
        greeting = "GOOD MORNING"
    }
    else if(getD >12 && getD <19){
        greeting = "GOOD AFTERNOON"
    }
    else{
        greeting = "GOOD EVENING"
    }
    return(
        <div>
            <h1 style= {{color: "pink", fontSize:"2cm" ,display:"flex" ,justifyContent:"center" }} >hey! {greeting}</h1>
        </div>

    )
}

export default Greeting