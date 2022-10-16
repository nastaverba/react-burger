import React from 'react'
import ReactDOM from 'react-dom'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientStyles from './BurgerIngredients.module.css';
import BigBun from '../../images/bunBig.png';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import RowStyles from '../IngredientRow/IngredientRow.module.css';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';



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
            <div className='ml-4 pt-6 mr-6 pl-4 pr-4' style={{position: 'relative'}}>
              <img src={BigBun} />
              <Counter count={1} size="default"/>
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Краторная булка N-200i</p>
            </div>
            <div className='pt-6 mr-2 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Флюоресцентная булка R2-D3</p>
            </div>
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <div className={RowStyles.IngredientRow}>
            <div className='ml-4 pt-6 mr-6 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Краторная булка N-200i</p>
            </div>
            <div className='pt-6 mr-2 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Флюоресцентная булка R2-D3</p>
            </div>
          </div>
          <div className={RowStyles.IngredientRow}>
            <div className='ml-4 pt-6 mr-6 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Краторная булка N-200i</p>
            </div>
            <div className='pt-6 mr-2 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Флюоресцентная булка R2-D3</p>
            </div>
          </div>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <div className={RowStyles.IngredientRow}>
            <div className='ml-4 pt-6 mr-6 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Краторная булка N-200i</p>
            </div>
            <div className='pt-6 mr-2 pl-4 pr-4'>
              <img src={BigBun} />
              <div className="pt-1 pb-1" style={{ display: 'flex', justifyContent: 'center', gap: '9px' }}>
                <span className="text text_type_digits-default">20</span>
                <CurrencyIcon type="primary" />
              </div>
              <p className="text text_type_main-default pb-6">Флюоресцентная булка R2-D3</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
