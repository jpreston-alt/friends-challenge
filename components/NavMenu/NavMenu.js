import React from "react";
import styles from "./NavMenu.module.css";
import { NavItem } from "@components";
import { links } from "@constants/links";

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
