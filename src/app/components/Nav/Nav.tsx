import styles from "./Nav.module.css";

import Link from "next/link";
import { FC } from "react";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} href={"/"}>
            Главная
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} href={"/users"}>
            Пользователи
          </Link>
        </li>
      </ul>
    </nav>
  );
};
