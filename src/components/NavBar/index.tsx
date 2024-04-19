import Link from "next/link";
import React, { FC, ReactNode } from "react";

const menuItems = [
  {
    id: "Home",
    path: "/",
  },
  {
    id: "CSR",
    path: "/todos",
  },
  {
    id: "SSR",
    path: "/ssr",
  },
];

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: FC<NavBarProps> = ({ children }: NavBarProps) => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 mb-4 border-2">
        {menuItems.map((menu) => (
          <Link
            key={menu.id}
            className="bg-blue-400 hover:bg-blue-800 p-2 px-8 rounded-lg flex-grow-0"
            href={menu.path}
          >
            {menu.id}
          </Link>
        ))}
      </div>
      {children}
    </>
  );
};

export default NavBar;
