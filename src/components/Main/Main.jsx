import React from 'react'
import ReactDOM from 'react-dom'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


import MainStyles from './Main.module.css';


function Main() {
  return (
    <>
      <main className={MainStyles.Main}>
        <section></section>
        <BurgerConstructor />
      </main>
    </>
  );
}

export default Main;
