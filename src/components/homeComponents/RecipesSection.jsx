import React, { useState } from "react";
import { ImSearch } from "react-icons/im";

import RecipeCard from "./RecipeCard";

const RecipesSection = ({ recipes }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const recipeDisplay = recipes
        .filter((recipe, index) => {
            let title = recipe.recipe_name.toLowerCase();
            let searchParams = searchTerm.toLowerCase();
            return title.includes(searchParams);
        })
        .map((recipe, index) => {
            return <RecipeCard recipe={recipe} key={recipe.recipe_id}/>;
        });

    return (
        <div id="recipes-section">
            <div id="search-container">
                <ImSearch size="1.5em" color="#db7533" />
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search for a Recipe"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div id="recipes-container">
                {recipeDisplay}
            </div>
        </div>
    );
};

export default RecipesSection;
