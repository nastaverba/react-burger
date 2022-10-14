import React from 'react'
import ReactDOM from 'react-dom'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import MainStyles from './Main.module.css';


function Main() {
  return (
    <>
      <main className={MainStyles.Main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </>
  );
}

export default Main;
