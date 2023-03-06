import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailImage from "./DetailImage";

const DetailScreen = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        axios.get(`https://recipes.devmountain.com/recipes/${id}`)
        .then((res) => {
            setRecipe(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <section>
            <DetailImage
                image={recipe.image_url}
                name={recipe.recipe_name}
            />
            <div id="details-container">
                <div id="ingredients-container" className="details-card">
                    <div id="ingredients-top-section">
                        <h2>Recipe</h2>
                        <h4>Prep Time: {recipe.prep_time}</h4>
                        <h4>Cook Time: {recipe.cook_time}</h4>
                        <h4>Serves: {recipe.serves}</h4>
                    </div>
                    <div>
                        <h2>Ingredients</h2>
                        {recipe.ingredients && recipe.ingredients.map((ing, index) => {
                            return <h4>{ing.quantity} {ing.ingredient}</h4>
                        })}
                    </div>
                </div>
                <div id="instructions-container" className="details-card">
                    <h2>Instructions</h2>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                        {recipe.instructions && JSON.parse(recipe.instructions)}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DetailScreen;
