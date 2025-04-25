import styles from "./UserItem.module.css";

import { User } from "@/app/types/user";
import { FC } from "react";
import Link from "next/link";

interface UserItemProps {
  user: User;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li className={styles.users__item}>
      <Link className={styles.users__link} href={`users/${user.id}`}>{user.username}</Link>
    </li>
  );
};
