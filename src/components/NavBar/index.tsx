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
    path: "/todos/ssr",
  },
  {
    id: "ISR",
    path: "/todos/isr",
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
            className="bg-white hover:bg-slate-600 p-2 px-8 rounded-lg flex-grow-0"
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
