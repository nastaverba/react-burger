import React from "react";

import IngredientStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card.jsx";
import data from "../../utils/data.js";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
  const buns = data.filter((ingredient) => ingredient.type === "bun");
  const sauces = data.filter((ingredient) => ingredient.type === "sauce");
  const ingredients = data.filter((ingredient) => ingredient.type === "main");

  return (
    <>
      <section className={IngredientStyles.BurgerIngredients}>
        <h1 className="text text_type_main-large pb-5 pt-10">
          Соберите бургер
        </h1>
        <div style={{ display: "flex" }} className="pb-10">
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={IngredientStyles.BurgerScroll}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <div className={IngredientStyles.IngredientRow}>
            {buns.map((bun) => (
              <Card
                key={bun._id}
                image={bun.image}
                price={bun.price}
                name={bun.name}
              />
            ))}
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <div className={IngredientStyles.IngredientRow}>
            {sauces.map((sauce) => (
              <Card
                key={sauce._id}
                image={sauce.image}
                price={sauce.price}
                name={sauce.name}
              />
            ))}
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <div className={IngredientStyles.IngredientRow}>
            {ingredients.map((ingredient) => (
              <Card
                key={ingredient._id}
                image={ingredient.image}
                price={ingredient.price}
                name={ingredient.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
