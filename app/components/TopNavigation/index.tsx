"use client"
import React, {FC, useState} from 'react';
import Link from "next/link";
import styles from './topNavigation.module.css'
import MenuShow from "@/app/components/TopNavigation/components/MenuShow";
import {IMenuItemProps, menuData} from "@/app/components/TopNavigation/menuConst";

type TopNavigationProps = {}


const TopNavigation: FC<TopNavigationProps> = (props) => {
    const {} = props
    const [showMenu, setShowMenu] = useState<IMenuItemProps[]>()
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
    const hoverEvents = (menuId: number) => {
        if (menuId === 0) return updateIsShowMenu(false)
        setShowMenu(menuData.find(item => item.menuId === menuId)?.menuItem)
        updateIsShowMenu(true)
    }

    const updateIsShowMenu = (show: boolean) => {
        setIsShowMenu(show)
    }

    return <div className={'bg-amber-300'} style={{height: "auto"}} onMouseLeave={() => updateIsShowMenu(false)}>
        <div className={styles['navigation-main']}>
            {menuData.map(item => <Link key={item.menuId} href={item.path}
                                        onMouseEnter={() => hoverEvents(item.menuId)}
                                        onClick={() => updateIsShowMenu(false)}>{item.menuName}</Link>)}
        </div>
        <MenuShow showMenu={showMenu} show={isShowMenu}/>
    </div>
}

export default TopNavigation;