import "./style.css"
import {NavLink } from "react-router-dom"
const NavBar = () =>{
    return(
        <div className = "navbar">
          <NavLink to = "/"><i class="fas fa-home"></i>home</NavLink>
          <NavLink to = "/Contact" ><i class="fas fa-phone-square-alt"></i>contact us</NavLink>
          <NavLink to = "/Shopping"><i class="fas fa-shopping-bag"></i>shop</NavLink>
          <NavLink to = "/"><i class="far fa-comments"></i>feedback</NavLink>
          <NavLink to = "/Form"><i class="fas fa-hand-point-right"></i>join us</NavLink>
        </div>
    )
}

export default NavBar