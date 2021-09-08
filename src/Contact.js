import "./Contact.css"
import NavBar from "./NavBar"
const Contact = () =>{
    return(
        <div className = "Contact">
            <NavBar/>
            <h1>ABOUT US</h1>
            <p>we are passonate about fashion.
                The functions of fashion include the ability to construct, predict, distribute and implement certain values and samples of behaviour, to form the entity's tastes and manage them. Fashion complements the traditional forms of culture through their turning by modernity and constructs on this basis a new human environment and.

                Fashion is one of the means of socialization: the imitation of this sample satisfies the needs of social support, gives a general, generally accepted to the lonely man (Zimmel). Fashion is presented as a means of social marking, identification, distance.

                The economic function of fashion is associated with its dynamism: the fashion is ahead of physical wear of the subject (product) moral and, consequently, provides the industry in demand for a new, constantly clearing the market for sales.

                Fashion, or one’s own personal style, functions as a “societal formation always combining two opposite principles. It is a socially acceptable and secure way to distinguish oneself from others and, at the same time, it satisfies the individual’s need for social adaptation and imitation”.[11] While philosopher Immanuel Kant believed fashion “has nothing to do with genuine judgements of taste… but is a case of unreflected and ‘blind’ imitation”,[11] sociologist Georg Simmel thought of fashion as something that “helped to overcome the distance between an individual and his society”.[11
            </p>
            <h1>CONTACT US AT</h1>
            <p style = {{fontSize:"1cm" , textAlign:"center" , fontWeight:"bold"}}>shreyajoshi1905@gmail.com</p>
            <h1>YOU CAN FOLLOW US</h1>
            <a style= {{textDecoration:"none"}} href = "https://www.instagram.com/"><span><i style= {{color:"purple"}} class="fab fa-instagram"></i>instagram</span></a>
            <a  href = "https://twitter.com/?lang=en" style = {{textDecoration:"none"}}><span><i style = {{color:"blue"}} class="fab fa-twitter"></i>twitter</span></a>
        </div>
    )
}

export default Contact