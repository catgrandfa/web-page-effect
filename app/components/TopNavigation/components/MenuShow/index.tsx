import React, {FC} from 'react';
import styles from './menuShow.module.css'
import {IMenuItemProps} from "@/app/components/TopNavigation/menuConst";
import classNames from "classnames";


type MenuShowProps = {
    showMenu?: IMenuItemProps[]
    show: boolean;
}

const MenuShow: FC<MenuShowProps> = ({showMenu, show}) => {

    return <div className={classNames({'hidden': !show}, 'p-4')}>
        {showMenu && showMenu.map((render, index) => <div
            key={index}>{render.itemName}</div>)}
    </div>
}

export default MenuShow;