import Link from "next/link";

const menuItems = [
  {
    id: "Home",
    path: "/home",
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

export default function NavBar() {
  return (
    <div className="flex items-center gap-2 p-2">
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
  );
}
