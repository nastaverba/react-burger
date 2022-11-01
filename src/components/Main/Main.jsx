import React from "react";

import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import MainStyles from "./Main.module.css";

function Main(props) {
  return (
    <>
      <main className={MainStyles.Main}>
        <BurgerIngredients updateData={props.updateData} />
        <BurgerConstructor updateData={props.updateData} />
      </main>
    </>
  );
}

export default Main;
