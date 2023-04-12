import React from "react";
import PropTypes from "prop-types";
import { Inter } from "next/font/google";
import { NavBar, SideNav } from "@components";
import { useViewport } from "@hooks";
import viewports from "@constants/viewports";
import styles from "./PageTemplate.module.css";

const inter = Inter({ subsets: ["latin"], weight: ["500", "600", "700"] });

const PageTemplate = ({ children, pageName }) => {
  const viewport = useViewport();
  const isMobile = viewport < viewports.mobile;

  return (
    <div className={`${inter.className} ${styles.container}`}>
      {!isMobile && <SideNav />}
      <div className={styles.page_container}>
        <NavBar pageName={pageName} isMobile={isMobile} />
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
