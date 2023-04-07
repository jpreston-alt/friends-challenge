import React from "react";
import styles from "./NavMenu.module.css";
import { NavItem } from "@components";
import { HomeIcon, FriendsIcon } from "@icons";

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Friends",
    href: "/friends",
    icon: FriendsIcon,
  },
];

const NavMenu = () => (
  <div className={styles.container}>
    {links.map((link) => (
      <NavItem
        key={`NavItem-${link.name}`}
        name={link.name}
        href={link.href}
        Icon={link.icon}
      />
    ))}
  </div>
);

export default NavMenu;
