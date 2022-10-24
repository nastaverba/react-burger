import React from "react";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerStyles from "./BurgerConstructor.module.css";
import Mover from "../../images/mover.png";
import data from "../../utils/data.js";

function BurgerConstructor() {
  const ingredients = data.filter((ingredient) => ingredient.type !== "bun");
  const bun = data.find((ingredient) => ingredient.type === "bun");
  const bunTopName = `${bun.name} (верх)`;
  const bunBottomName = `${bun.name} (низ)`;

  return (
    <>
      <section className={BurgerStyles.BurgerConstructor}>
        <div className="pl-2">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunTopName}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={BurgerStyles.BurgerScroll}>
          {ingredients.map((ingredient) => (
            <div className={BurgerStyles.ElementContainer}>
              <img src={Mover} alt="Переместить ингредиент" />
              <ConstructorElement
                key={ingredient._id}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </div>
          ))}
        </div>
        <div className="pl-2">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunBottomName}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={BurgerStyles.Total}>
          <div className={BurgerStyles.TotalSum}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  );
}

export default BurgerConstructor;
