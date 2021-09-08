import "./style.css"
import "./Card.css"
const Card = (props) =>{
    return(
        <div className = "card">
            <div className = "cardH">{props.title}</div>
            <img src = {props.imgSrc} alt = "img"/>
            <a ><button><i class="fas fa-cart-plus"></i>ADD TO CART</button></a>
            
        </div>
    )
}

export default Card