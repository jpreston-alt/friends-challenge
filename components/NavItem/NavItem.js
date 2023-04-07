import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "@components";
import styles from "./NavItem.module.css";

const NavItem = ({ href, name, Icon }) => {
  const { pathname } = useRouter();
  let linkClassNames = styles.link;
  const active = pathname === href;

  if (active) linkClassNames += ` ${styles.active}`;

  return (
    <div className={styles.container}>
      <Link href={href}>
        <div className={linkClassNames}>
          <Icon />
          <Text color="white" variant="link">
            {name}
          </Text>
        </div>
      </Link>
    </div>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
