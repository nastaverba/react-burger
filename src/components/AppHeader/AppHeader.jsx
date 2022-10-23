import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderStyles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <>
      <header className={AppHeaderStyles.AppHeader}>
        <div className={AppHeaderStyles.MenuContainer}>
          <a className={AppHeaderStyles.MenuItem} href="/#">
            <div className={AppHeaderStyles.MenuItemIcon}>
              <BurgerIcon type="primary" />
            </div>
            <span className="text text_type_main-default">Конструктор</span>
          </a>
          <a className={AppHeaderStyles.MenuItemSecondary} href="/#">
            <div className={AppHeaderStyles.MenuItemIcon}>
              <ListIcon type="secondary" />
            </div>
            <span className="text text_type_main-default">Лента заказов</span>
          </a>
        </div>
        <Logo />
        <a className={AppHeaderStyles.MenuItemSecondary} href="/#">
          <div className={AppHeaderStyles.MenuItemIcon}>
            <ProfileIcon type="secondary" />
          </div>
          <span className="text text_type_main-default">Личный кабинет</span>
        </a>
      </header>
    </>
  );
}

export default AppHeader;
