import { Drawer } from "@mui/material";
import * as React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css'


const SideBar = ({ toggle, setToggle }) => {
  const MenuItems = [
    //  { name: "Home" },
    { name: "About", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Events", url: "/event" },
    { name: "Blogs", url: "/blog" },
    { name: "FAQ's", url: "/faq" },
    { name: "Shop", url: "/shop" },
    { name: "Contact", url: "/contact" },
  ];
  return (
    <div>
      <Drawer open={toggle}>
        <div>
          <div>
            <FaTimes onClick={() => setToggle(false)} />
          </div>
          <ul className="Sidebarlist">
            {MenuItems.map((val, index) => {
              return (
                <li key={index}>
                  <Link to={val.url} onClick={() => setToggle(false)}>
                    {val.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SideBar;

