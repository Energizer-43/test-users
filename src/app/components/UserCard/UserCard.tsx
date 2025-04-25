import { User } from "@/app/types/user";
import styles from "./UserCard.module.css";

import { FC } from "react";
import Link from "next/link";

interface UserCardProps {
  user: User;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={styles.user__wrapper}>
      <h2 className={styles.user__title}>{user.name}</h2>
      <div className={styles.user__contacts}>
        <Link href={`mailto:${user.email}`} className={styles.user__email}>
          Email: {user.email}
        </Link>
        <span className={styles.user__phone}>Телефон: {user.phone}</span>
      </div>
    </div>
  );
};
