"use client";

import { ButtonBack } from "@/app/components/ButtonBack/ButtonBack";
import { type User } from "@/app/types/user";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "../../utils/axios";
import { UserCard } from "@/app/components/UserCard/UserCard";

export default function User() {
  const params = useParams<{ id: string }>();
  const [user, setUser] = useState<User>({} as User);
  const [loader, setLoader] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`/users/${params.id}`)
      .then((data) => {
        const user = data.data;
        user as User;
        setUser(user);
      })
      .catch(() => setError(true))
      .finally(() => setLoader(false));
  }, []);

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
        UserInfoPage
      </h2>
      <ButtonBack />
      {error && <span className="error">Нет такого юзера!</span>}
      {loader && <span className="loader">Загрузка...</span>}
      {Object.keys(user).length !== 0 && <UserCard user={user} />}
    </>
  );
}
