import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerStyles from "./BurgerConstructor.module.css";
import Mover from "../../images/mover.png";
import { Api } from "../Api/Api.js";

function BurgerConstructor(props) {
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
    const ingredients = items.data.filter(
      (ingredient) => ingredient.type !== "bun"
    );
    const bun = items.data.find((ingredient) => ingredient.type === "bun");

    return (
      <section className={BurgerStyles.BurgerConstructor}>
        <div className="pl-2">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={BurgerStyles.BurgerScroll}>
          {ingredients.map((ingredient) => (
            <div className={BurgerStyles.ElementContainer} key={ingredient._id}>
              <img src={Mover} alt="Переместить ингредиент" />
              <ConstructorElement
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
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={BurgerStyles.Total}>
          <div className={BurgerStyles.TotalSum}>
            <p className="text text_type_digits-medium">610</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              props.updateData("", "order");
            }}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
}

BurgerConstructor.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default BurgerConstructor;
