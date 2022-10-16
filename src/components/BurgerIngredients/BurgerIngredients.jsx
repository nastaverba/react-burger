import React from 'react'
import ReactDOM from 'react-dom'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientStyles from './BurgerIngredients.module.css';
import BigBun from '../../images/bunBig.png';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import RowStyles from '../IngredientRow/IngredientRow.module.css';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import Card from '../Card/Card.jsx';



function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  return (
    <>
      <section className={IngredientStyles.BurgerIngredients}>
        <h1 className="text text_type_main-large pb-5 pt-10">Соберите бургер</h1>
        <div style={{ display: 'flex' }} className="pb-10">
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={IngredientStyles.BurgerScroll}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <div className={RowStyles.IngredientRow}>
            <Card />
            <Card />
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <div className={RowStyles.IngredientRow}>
            <Card />
            <Card />
          </div>
          <div className={RowStyles.IngredientRow}>
            <Card />
            <Card />
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <div className={RowStyles.IngredientRow}>
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
