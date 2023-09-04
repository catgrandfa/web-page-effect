"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import styles from "./topNavigation.module.css";
import MenuShow from "@/app/components/TopNavigation/components/MenuShow";
import {
  IMenuItemProps,
  menuData,
} from "@/app/components/TopNavigation/menuConst";

type TopNavigationProps = {};

/**
 * Renders the top navigation component.
 * @param props - The component props.
 * @returns The rendered top navigation component.
 */
const TopNavigation: FC<TopNavigationProps> = (props) => {
  const {} = props;

  // State to store the menu items to be shown
  const [showMenu, setShowMenu] = useState<IMenuItemProps[]>();

  // State to track whether the menu is being shown or not
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  /**
   * Handles the hover events for the menu items.
   * @param menuId - The ID of the menu item.
   */
  const hoverEvents = (menuId: number) => {
    // If the menu ID is 0, hide the menu
    if (menuId === 0) return updateIsShowMenu(false);

    // Find the menu item based on the menu ID and set it as the shown menu
    setShowMenu(menuData.find((item) => item.menuId === menuId)?.menuItem);

    // Show the menu
    updateIsShowMenu(true);
  };

  /**
   * Updates the state to control whether the menu is shown or not.
   * @param show - Whether to show the menu or not.
   */
  const updateIsShowMenu = (show: boolean) => {
    setIsShowMenu(show);
  };

  return (
    <div
      className={"bg-amber-300"}
      style={{ height: "auto" }}
      onMouseLeave={() => updateIsShowMenu(false)}
    >
      <div className={styles["navigation-main"]}>
        {/* Render the menu items */}
        {menuData.map((item) => (
          <Link
            key={item.menuId}
            href={item.path}
            onMouseEnter={() => hoverEvents(item.menuId)}
            onClick={() => updateIsShowMenu(false)}
          >
            {item.menuName}
          </Link>
        ))}
      </div>
      {/* Render the menu */}
      <MenuShow showMenu={showMenu} show={isShowMenu} />
    </div>
  );
};

export default TopNavigation;
