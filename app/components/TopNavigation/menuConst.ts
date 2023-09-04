export const menuData = [
  {
    path: "/",
    menuId: 0,
    menuName: "首页",
  },
  {
    path: "/desktop",
    menuId: 1,
    menuName: "桌面端",
    menuItem: [
      { itemId: "1-1", itemName: "测试桌面菜单1" },
      { itemId: "1-2", itemName: "测试桌面菜单2" },
    ],
  },
  {
    path: "/mobile",
    menuId: 2,
    menuName: "移动端",
    menuItem: [{ itemId: "2-1", itemName: "测试移动端菜单1" }],
  },
  {
    path: "/adaptive",
    menuId: 3,
    menuName: "自适应",
    menuItem: [{ itemId: "3-1", itemName: "测试自适应菜单1" }],
  },
];

export type IMenuDataProps = {
  path: string;
  menuId: number;
  menuName: string;
  menuItem: IMenuItemProps[];
};

export type IMenuItemProps = {
  itemId: string;
  itemName: string;
};
