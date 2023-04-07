import React from "react";
import PropTypes from "prop-types";
import { Inter } from "next/font/google";
import { NavBar, SideNav } from "@components";
import styles from "./PageTemplate.module.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700"] });

const PageTemplate = ({ children, pageName }) => {
  return (
    <div className={inter.className}>
      <NavBar pageName={pageName} />
      <SideNav />
      <main>{children}</main>
    </div>
  );
};

PageTemplate.propTypes = {};

PageTemplate.defaultProps = {};

export default PageTemplate;
