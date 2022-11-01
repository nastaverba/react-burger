import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import IngredientStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card.jsx";
import { Api } from "../Api/Api.js";

function BurgerIngredients(props) {
  const [current, setCurrent] = useState("one");
  const setTab = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    Api(setIsLoaded, setItems, setError);
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    const buns = items.data.filter((ingredient) => ingredient.type === "bun");
    const sauces = items.data.filter(
      (ingredient) => ingredient.type === "sauce"
    );
    const ingredients = items.data.filter(
      (ingredient) => ingredient.type === "main"
    );
    return (
      <>
        <section className={IngredientStyles.BurgerIngredients}>
          <h1 className="text text_type_main-large pb-5 pt-10">
            Соберите бургер
          </h1>
          <div className={`pb-10 ${IngredientStyles.TabContainer}`}>
            <Tab
              value="one"
              active={current === "one"}
              onClick={() => setTab("one")}
            >
              Булки
            </Tab>
            <Tab
              value="two"
              active={current === "two"}
              onClick={() => setTab("two")}
            >
              Соусы
            </Tab>
            <Tab
              value="three"
              active={current === "three"}
              onClick={() => setTab("three")}
            >
              Начинки
            </Tab>
          </div>
          <div className={IngredientStyles.BurgerScroll}>
            <h2 className="text text_type_main-medium pb-6" id="one">
              Булки
            </h2>
            <div className={IngredientStyles.IngredientRow}>
              {buns.map((bun) => (
                <Card
                  key={bun._id}
                  image={bun.image}
                  price={bun.price}
                  name={bun.name}
                  onClick={() => {
                    props.updateData(bun, "ingredient");
                  }}
                />
              ))}
            </div>
            <h2 className="text text_type_main-medium pt-10 pb-6" id="two">
              Соусы
            </h2>
            <div className={IngredientStyles.IngredientRow}>
              {sauces.map((sauce) => (
                <Card
                  key={sauce._id}
                  image={sauce.image}
                  price={sauce.price}
                  name={sauce.name}
                  onClick={() => {
                    props.updateData(sauce, "ingredient");
                  }}
                />
              ))}
            </div>
            <h2 className="text text_type_main-medium pt-10 pb-6" id="three">
              Начинки
            </h2>
            <div className={IngredientStyles.IngredientRow}>
              {ingredients.map((ingredient) => (
                <Card
                  key={ingredient._id}
                  image={ingredient.image}
                  price={ingredient.price}
                  name={ingredient.name}
                  onClick={() => {
                    props.updateData(ingredient, "ingredient");
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

BurgerIngredients.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default BurgerIngredients;
