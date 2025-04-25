"use client";

import styles from "./UsersList.module.css";
import { FC } from "react";
import { UserItem } from "../UserItem/UserItem";
import { useAppSelector } from "@/app/hooks";

interface UsersListProps {}

export const UsersList: FC<UsersListProps> = () => {
  const { users, isLoading, isError } = useAppSelector((state) => state.users);

  return (
    <>
      {isLoading && <span className="loader">Загрузка...</span>}
      {isError && <span className="error">{isError}</span>}
      {users.length !== 0 && (
        <ul className={styles.users__list}>
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
};
