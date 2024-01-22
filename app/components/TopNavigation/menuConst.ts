export interface IMenuDataProps {
    path: string;
    menuId: number;
    menuName: string;
    menuItem?: IMenuItemProps[];
}

export interface IMenuItemProps {
    itemId: string;
    itemName: string;
}
