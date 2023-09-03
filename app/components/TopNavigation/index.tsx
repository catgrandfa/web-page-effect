import React, {FC} from 'react';
import Link from "next/link";
import styles from './topNavigation.module.css'

type TopNavigationProps = {}

const TopNavigation: FC<TopNavigationProps> = (props) => {
    const {} = props
    return <div className={styles['navigation-main']}>
        <Link href={'/'}>首页</Link>
        <Link href={'/desktop'}>桌面端</Link>
        <Link href={'/mobile'}>移动端</Link>
        <Link href={'/adaptive'}>自适应</Link>
    </div>
}

export default TopNavigation;