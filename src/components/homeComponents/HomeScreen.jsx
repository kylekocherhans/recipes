import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import AdBanner from "./AdBanner";
import RecipesSection from "./RecipesSection";

const HomeScreen = () => {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
        axios.get("https://recipes.devmountain.com/recipes")
        .then((res) => {
            // console.log(res.data);
            setRecipes(res.data);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div>
            <AdBanner />
            <RecipesSection recipes={recipes}/>
        </div>
    );
};

export default HomeScreen;
