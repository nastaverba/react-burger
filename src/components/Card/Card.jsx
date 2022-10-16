import React from 'react'
import ReactDOM from 'react-dom'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BigBun from '../../images/bunBig.png';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';



function Card() {
  return (
    <div className='' style={{ position: 'relative', width: '272px' }}>
      <img src={BigBun} />
      <Counter count={1} size="default" />
      <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
        <span className="text text_type_digits-default">20</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default pb-6">Флюоресцентная булка R2-D3</p>

    </div>
  );
}

export default Card;
