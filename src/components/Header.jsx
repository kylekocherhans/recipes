import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h2>Devmountain Eatery</h2>
            <nav>
                <NavLink to="">
                    <button>Home</button>
                </NavLink>
                <NavLink to="/newRecipe">
                    <button>Add Recipe</button>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
