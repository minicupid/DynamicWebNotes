const IngredientList = (props) => {
// do stuff outside of return JSX
const {ingredients, title} = props; // destructuring props object
    return (
        <div>
            <h2>{title}</h2>
                <ul className="ingred-div">
                    {ingredients.map((ingred, index) => ( // loops through array
                        <li key = {index}>{ingred}</li> // returns each item in array as a list item

                    ))}
                </ul>
        </div>
    )
}

export default IngredientList;

