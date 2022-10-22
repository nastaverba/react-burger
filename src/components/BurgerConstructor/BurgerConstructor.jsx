import React from "react";
import PropTypes from "prop-types";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerStyles from "./BurgerConstructor.module.css";
import ConstructorStyles from "../ConstructorContainer/ConstructorContainer.module.css";
import TotalStyles from "../Total/Total.module.css";
import BunImage from "../../images/bun.png";
import SauceImage from "../../images/sauce.png";
import MeatImage from "../../images/meat.png";
import RingsImage from "../../images/rings.png";
import FruitsImage from "../../images/fruits.png";
import Mover from "../../images/mover.png";

function BurgerConstructor() {
  return (
    <>
      <section className={BurgerStyles.BurgerConstructor}>
        <div className="pl-2">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Кратерная булка N-200i (верх)"
            price={20}
            thumbnail={BunImage}
          />
        </div>
        <div className={BurgerStyles.BurgerScroll}>
          <div className={ConstructorStyles.ElementContainer}>
            <img src={Mover} alt="Переместить ингредиент"/>
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={SauceImage}
            />
          </div>
          <div className={ConstructorStyles.ElementContainer}>
            <img src={Mover} alt="Переместить ингредиент"/>
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={MeatImage}
            />
          </div>
          <div className={ConstructorStyles.ElementContainer}>
            <img src={Mover} alt="Переместить ингредиент"/>
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={FruitsImage}
            />
          </div>
          <div className={ConstructorStyles.ElementContainer}>
            <img src={Mover} alt="Переместить ингредиент"/>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={RingsImage}
            />
          </div>
          <div className={ConstructorStyles.ElementContainer}>
            <img src={Mover} alt="Переместить ингредиент"/>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={RingsImage}
            />
          </div>
          <div className={ConstructorStyles.ElementContainer}>
            <img src={Mover} alt="Переместить ингредиент"/>
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={RingsImage}
            />
          </div>
        </div>
        <div className="pl-2">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Кратерная булка N-200i (низ)"
            price={20}
            thumbnail={BunImage}
          />
        </div>
        <div className={TotalStyles.Total}>
          <div className={TotalStyles.TotalSum}>
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

ConstructorElement.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};

export default BurgerConstructor;
