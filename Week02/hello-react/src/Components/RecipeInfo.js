import './RecipeCard.css';

// props = {
//    title: "Buttermilk Pancakes",
//     description: "Fluffy pancakes made with buttermilk.",
// }

const RecipeInfo = (props) => {
    const {title, description} = props;
    return <div className = "Recipe_Info"> 
    <h2 className = "Recipe_Title"> {title} </h2>
    <p> {description} </p>
     </div>
}

export default RecipeInfo;