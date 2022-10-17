import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function Card(props) {
  return (
    <div className='' style={{ position: 'relative', width: '272px' }}>
      <img src={props.image} />
      <Counter count={1} size="default" />
      <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
        <span className="text text_type_digits-default">{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default pb-6">{props.name}</p>

    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string
};

export default Card;
