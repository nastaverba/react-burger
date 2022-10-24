import React from "react";
import PropTypes from "prop-types";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import CardStyles from "./Card.module.css";

function Card(props) {
  const PriceStyles = `pt-1 pb-1 ${CardStyles.Price}`;
  return (
    <div className={CardStyles.Card}>
      <img src={props.image} alt={props.name} />
      <Counter count={1} size="default" />
      <div className={PriceStyles}>
        <span className="text text_type_digits-default">{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default pb-6">{props.name}</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
