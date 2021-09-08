import Card from "./Card"
import ShopAPI from "./ShopAPI"
import "./Shopping.css"
import NavBar from "./NavBar"
const Shopping = () =>{
   
      return(
        <div className = "shopping">
          <NavBar/>
        {ShopAPI.map((element , index ) =>{
          return(
            <div className  = "C">
            <Card 
            key = {element.id}
            imgSrc = {element.img}
            title = {element.title}
            />
        </div>
          )

        })}
        </div>
      
      )
    
   
}

export default Shopping