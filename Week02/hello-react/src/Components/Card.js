import './RecipeCard.css'


const Card = (props) => {
    const {children} = props; // children is a special prop that contains whatever you include between the opening and closing tags when you invoke a component
    return <div className = "card"> 
        {children}  
    </div>

}

export default Card;