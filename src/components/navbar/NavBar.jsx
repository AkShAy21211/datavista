import React, { useState } from "react";
import { HR_NAV_ITEMS, VR_NAV_ITEMS } from "../../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  const [selectedSubItem, setSelectedSubItem] = useState("Home");
  const [hover, setHover] = useState(false);
  return (
    <div className="navbar bg-green text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul className="menu space-y-3 bg-white menu-sm shadow-lg dropdown-content rounded-box  z-[1] mt-3 w-52 p-2 py-5">
            {VR_NAV_ITEMS.map((item, i) => {
              let hasSubItem = item.subMenu ? true : false;
              return (
                <li
                  key={i}
                  onClick={(e) => setSelectedItem(item.label)}
                  onMouseOver={() => {
                    if (hasSubItem) {
                      setHover(true);
                    }
                  }}
                  onMouseOut={() => {
                    if (hasSubItem) {
                      setHover(false);
                    }
                  }}
                  className={`${
                    selectedItem === item.label
                      ? "bg-green text-white shadow-inner"
                      : "hover:bg-slate-200 text-black"
                  } rounded-md  `}
                >
                  <Link to={item.link}>{item.label}</Link>
                  {hasSubItem && hover ? (
                    <ul className="menu space-y-5 bg-white menu-sm shadow-lg dropdown-content rounded-box  z-[1] mt-3 w-52 p-2 py-5 mx-10">
                      {item.subMenu.map((subItem, i) => {
                        return (
                          <li
                            key={i}
                            onClick={() => setSelectedSubItem(subItem.label)}
                            className={`${
                              selectedSubItem === subItem.label
                                ? "bg-green text-white shadow-inner"
                                : "hover:bg-slate-200 text-black"
                            } rounded-md  `}
                          >
                            <Link to={subItem.link}>{subItem.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <ul className="flex  gap-5 me-3">
          {HR_NAV_ITEMS.map((item, i) => (
            <li
              key={i}
              className="text-sm text-nowrap font-bold hover:shadow-inner p-2 hover:bg-black/20 rounded-md"
            >
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
