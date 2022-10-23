import React from "react";

import IngredientStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Card from "../Card/Card.jsx";
import data from "../../utils/data.js";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
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
            <Card
              image={data[0].image}
              price={data[0].price}
              name={data[0].name}
            />
            <Card
              image={data[14].image}
              price={data[14].price}
              name={data[14].name}
            />
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[3].image}
              price={data[3].price}
              name={data[3].name}
            />
            <Card
              image={data[5].image}
              price={data[5].price}
              name={data[5].name}
            />
          </div>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[6].image}
              price={data[6].price}
              name={data[6].name}
            />
            <Card
              image={data[9].image}
              price={data[9].price}
              name={data[9].name}
            />
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[1].image}
              price={data[1].price}
              name={data[1].name}
            />
            <Card
              image={data[2].image}
              price={data[2].price}
              name={data[2].name}
            />
          </div>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[4].image}
              price={data[4].price}
              name={data[4].name}
            />
            <Card
              image={data[7].image}
              price={data[7].price}
              name={data[7].name}
            />
          </div>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[8].image}
              price={data[8].price}
              name={data[8].name}
            />
            <Card
              image={data[10].image}
              price={data[10].price}
              name={data[10].name}
            />
          </div>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[11].image}
              price={data[11].price}
              name={data[11].name}
            />
            <Card
              image={data[12].image}
              price={data[12].price}
              name={data[12].name}
            />
          </div>
          <div className={IngredientStyles.IngredientRow}>
            <Card
              image={data[13].image}
              price={data[13].price}
              name={data[13].name}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
