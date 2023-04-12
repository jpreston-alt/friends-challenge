import React from "react";
import PropTypes from "prop-types";
import { Text } from "@components";
import { links } from "@constants/links";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = ({ pageName, isMobile }) => (
  <div className={styles.container}>
    <Text variant="h2">{pageName}</Text>
    {isMobile && (
      <div>
        {links.map((link) => (
          <Link
            key={`MobileLink-${link.name}`}
            href={link.href}
            className={styles.mobile_link}
          >
            {link.name}
          </Link>
        ))}
      </div>
    )}
  </div>
);

NavBar.propTypes = {
  pageName: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default NavBar;
