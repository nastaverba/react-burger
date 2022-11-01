import React from "react";
import PropTypes from "prop-types";

import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import MainStyles from "./Main.module.css";

function Main(props) {
  return (
    <main className={MainStyles.Main}>
      <BurgerIngredients updateData={props.updateData} />
      <BurgerConstructor updateData={props.updateData} />
    </main>
  );
}

Main.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default Main;
