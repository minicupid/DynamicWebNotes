import Card from "./Components/Card";
import RecipeInfo from "./Components/RecipeInfo";
import './Components/RecipeCard.css'
import { RECIPE } from "./Components/Recipe-Data";
import IngredientsList from "./Components/IngredientsList";
import InstructionsList from "./Components/InstructionsList";
import RecipeIMG from "./Components/RecipeIMG";

const App = () => {
    return (
        <div> 
            <Card> 
                <RecipeIMG imgSrc = {RECIPE.imgSrc}/>
                <div className = "CardText">

                <RecipeInfo title = "{RECIPE.title}"
                    description = "{RECIPE.description}"
                    ></RecipeInfo>

                    <div className = "Card_List">
                        <IngredientsList Data = {RECIPE.ingredients}/>
                        <InstructionsList />

                    </div>
                </div>
            </Card>
    </div>
    )
}

export default App;