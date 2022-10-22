import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderStyles from "./AppHeader.module.css";
import MenuItemStyles from "../MenuItem/MenuItem.module.css";
import MenuContainerStyles from "../MenuContainer/MenuContainer.module.css";

function AppHeader() {
  return (
    <>
      <header className={AppHeaderStyles.AppHeader}>
        <div className={MenuContainerStyles.MenuContainer}>
          <a className={MenuItemStyles.MenuItem} href="/#">
            <div className={MenuItemStyles.MenuItemIcon}>
              <BurgerIcon type="primary" />
            </div>
            <span className="text text_type_main-default">Конструктор</span>
          </a>
          <a className={MenuItemStyles.MenuItemSecondary} href="/#">
            <div className={MenuItemStyles.MenuItemIcon}>
              <ListIcon type="secondary" />
            </div>
            <span className="text text_type_main-default">Лента заказов</span>
          </a>
        </div>
        <Logo />
        <a className={MenuItemStyles.MenuItemSecondary} href="/#">
          <div className={MenuItemStyles.MenuItemIcon}>
            <ProfileIcon type="secondary" />
          </div>
          <span className="text text_type_main-default">Личный кабинет</span>
        </a>
      </header>
    </>
  );
}

export default AppHeader;
