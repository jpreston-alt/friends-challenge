import React from "react";
import PropTypes from "prop-types";
import { Inter } from "next/font/google";
import { NavBar, SideNav } from "@components";
import styles from "./PageTemplate.module.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700"] });

const PageTemplate = ({ children, pageName }) => {
  return (
    <div className={`${inter.className} ${styles.container}`}>
      <div className={styles.side_nav_container}>
        <SideNav />
      </div>
      <div className={styles.page_container}>
        <NavBar pageName={pageName} />
        {children}
      </div>
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
};

export default PageTemplate;
