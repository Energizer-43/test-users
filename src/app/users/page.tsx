"use client";

import { useEffect } from "react";
import { UsersList } from "../components/UsersList/UsersList";
import { useAppDispatch } from "../hooks";
import { getUsers } from "../redux/slices/usersSlice";

export default function Users() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h2
        style={{
          maxWidth: "fit-content",
          color: "white",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "16px",
        }}
      >
        UsersPage
      </h2>
      <UsersList />
    </>
  );
}
