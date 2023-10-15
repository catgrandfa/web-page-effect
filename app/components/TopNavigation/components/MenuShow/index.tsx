import React, { FC } from "react";
import styles from "./menuShow.module.css";
import { IMenuItemProps } from "@/app/components/TopNavigation/menuConst";
import classNames from "classnames";
import { subMenuHeight } from "../..";

type MenuShowProps = {
  showMenu?: IMenuItemProps[];
  show: boolean;
};

const MenuShow: FC<MenuShowProps> = ({ showMenu, show }) => {
  return (
    show && (
      <div className={styles["subMenu-main"]}>
        {showMenu &&
          showMenu.map((render, index) => (
            <div
              className={styles["subMenu-item"]}
              style={{ height: subMenuHeight }}
              key={index}
            >
              {render.itemName}
            </div>
          ))}
      </div>
    )
  );
};

export default MenuShow;
