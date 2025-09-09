import './RecipeCard.css';

const IngredientsList = (props) => {
    const {Data} = props;
    return <div className = "IngredientsList"> 
    <h3 className = "list_title"> ingredients </h3>
    <ul>
        {Data.map((item, index) => {
            return (
            <li key = {index} className = "list_item"> 
                {item}
            </li>)}
        )}
    </ul>
     </div>
}

export default IngredientsList;