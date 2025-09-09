import './styles.css';
import pancake from '../../assets/pancake.png';

import {RECIPE} from '../recipe-data';

import IngredientList from './ingredientList';

const RecipeCard = () => {
    return (
        <div className = "card">
            <img src = {pancake} alt="pancakes" className = "recipe-image" />
            <div className = "text-div">
                <h1> {RECIPE.title} </h1>
                <div className = "cont">
                    <div className = "ingred-div">
                        <IngredientList ingredients = {RECIPE.ingredients} title = "Ingredients" /> {/* imports ingred component */}
                    </div>

                    <div className = "steps-div">
                        <h2> Instructions </h2>
                            <ol>
                            { RECIPE.instructions.map((step, index) => (
                                    <li>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RecipeCard;