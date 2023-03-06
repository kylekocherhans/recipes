import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const navigate = useNavigate();

    const addIngredient = () => {
        setIngredients([...ingredients, { name, quantity }]);
        setName("");
        setQuantity("");
    };

    const ingredientsDisplay = ingredients.map((ing, index) => {
        return (
            <li key={index}>
                {ing.quantity} {ing.name}
            </li>
        );
    });

    const initialValues = {
        recipeName: "",
        imageURL: "",
        type: "",
        prepTime: "",
        cookTime: "",
        serves: "",
        ingredients: [],
        instructions: "",
    };

    const onSubmit = (values) => {
        values.ingredients = ingredients;
        // console.log(values);

        axios.post("https://recipes.devmountain.com/recipes", values)
        .then((res) => {
            navigate(`/recipe/${res.data[0][0].recipe_id}`)
        })
        .catch((err) => console.log(err));
    };

    return (
        <section id="new-recipe-section">
            <div id="new-recipe-container">
                <h1>Tell us about your Recipe!</h1>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ values, handleChange, handleSubmit }) => {
                        return (
                            <form id="new-recipe-form" onSubmit={handleSubmit}>
                                <div className="form-row jc-space-between children-width-45">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={values.recipeName}
                                        onChange={handleChange}
                                        name="recipeName"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Image URL"
                                        value={values.imageURL}
                                        onChange={handleChange}
                                        name="imageURL"
                                    />
                                </div>
                                <div className="form-row jc-space-around">
                                    <div className="form-row ai-center">
                                        <input
                                            type="radio"
                                            id="cook"
                                            value="Cook"
                                            onChange={handleChange}
                                            name="type"
                                        />
                                        <label htmlFor="cook">Cook</label>
                                    </div>
                                    <div className="form-row ai-center">
                                        <input
                                            type="radio"
                                            id="bake"
                                            value="Bake"
                                            onChange={handleChange}
                                            name="type"
                                        />
                                        <label htmlFor="bake">Bake</label>
                                    </div>
                                    <div className="form-row ai-center">
                                        <input
                                            type="radio"
                                            id="drink"
                                            value="Drink"
                                            onChange={handleChange}
                                            name="type"
                                        />
                                        <label htmlFor="drink">Drink</label>
                                    </div>
                                </div>
                                <div className="form-row jc-space-between children-width-30">
                                    <input
                                        type="text"
                                        placeholder="Prep Time"
                                        value={values.prepTime}
                                        onChange={handleChange}
                                        name="prepTime"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Cook Time"
                                        value={values.cookTime}
                                        onChange={handleChange}
                                        name="cookTime"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Serves"
                                        value={values.serves}
                                        onChange={handleChange}
                                        name="serves"
                                    />
                                </div>
                                <h2>Ingredients</h2>
                                <div className="form-row jc-space-between children-width-45">
                                    <div className="flex-column">
                                        <input
                                            type="text"
                                            placeholder="Ingredient"
                                            className="mb-20"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <input
                                            type="text"
                                            placeholder="Quantity"
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(e.target.value)
                                            }
                                        />
                                    </div>
                                    <ul id="ingredient-list">{ingredientsDisplay}</ul>
                                </div>
                                <div className="form-row jc-center">
                                    <button
                                        type="button"
                                        id="add-ingredient-btn"
                                        onClick={addIngredient}
                                    >
                                        Add Another
                                    </button>
                                </div>
                                <textarea
                                    id="instructions"
                                    placeholder="What are the instructions?"
                                    rows={6}
                                    value={values.instructions}
                                    onChange={handleChange}
                                    name="instructions"
                                ></textarea>
                                <div className="form-row jc-center">
                                    <button type="submit" id="save-recipe-btn">Save</button>
                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </section>
    );
};

export default NewRecipeScreen;
