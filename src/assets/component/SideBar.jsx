import React from "react";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";

const SideBar = () => {
  const sideBar = [
    { id: 1, path: "/", name: "DashBoard", icon: LuBox },
    { id: 2, path: "/income", name: "Incomes", icon: LuUser },
    { id: 3, path: "/Budget", name: "Budgets", icon: LuCalendar }, // Fixed typo: "Budjects" → "Budgets"
    { id: 4, path: "/expense", name: "Expenses", icon: LuCalendar }, // Changed `id` to 4
  ];

  const [active, setActive] = React.useState(1);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="w-16 md:w-56 left-0 top-0 h-screen  fixed pt-8 px-4">
      <div></div>
      <h1 className="text-2xl font-bold text-blue-600 underline decoration-dotted decoration-4">
        SmartPlanB
      </h1>
      <ul className="mt-6 space-y-6">
        {sideBar.map((menu) => (
          <li
            key={menu.id}
            className={` font-medium rounded-md py-2 px-4 hover:bg-gray-100 hover-text-indigo-500  cursor-pointer ${
              active === menu.id ? "bg-blue-200 text-gray-900" : ""
            }`}
            onClick={() => handleClick(menu.id)}
          >
            <div className="flex justify-center md:justify-start items-center md:space-x-5  ">
              <span>{<menu.icon size={20} />}</span>
              <span className="test-sm text-gray-500 hidden md:flex">
                {menu.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <ul>
          <li
            className={` font-medium rounded-md py-2 px-4 bg-red-200
 hover:bg-red-400 hover-text-gray-900   cursor-pointer ${
   active === 6 ? "bg-blue-200 text-gray-900" : ""
 }`}
            onClick={() => handleClick(6)}
          >
            <div className="flex justify-center md:justify-start items-center md:space-x-5  ">
              <span>
                <LuBox />
              </span>
              <span className="test-sm text-gray-500 hidden md:flex">
                LogOut
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
