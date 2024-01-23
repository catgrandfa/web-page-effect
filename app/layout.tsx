import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MenuProvider } from "./providers/menu/provider";
import { IMenuDataProps } from "./components/TopNavigation/menuConst";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Web Page Effect",
    description: "Show some interesting web effects.",
    icons: ["./pwa/smatterer.png"],
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { menuData } = await init();

    return (
        <html lang="en">
            <body className={inter.className}>
                <MenuProvider menuData={menuData}>{children}</MenuProvider>
            </body>
        </html>
    );
}

async function init() {
    const menuData: IMenuDataProps[] = [
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
    return { menuData };
}
