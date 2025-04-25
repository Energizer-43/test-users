import styles from "./ButtonBack.module.css";

import { FC } from "react";
import { useRouter } from "next/navigation";

interface ButtonBackProps {}

export const ButtonBack: FC<ButtonBackProps> = () => {
  const { push } = useRouter();

  return (
    <button className={styles.back} onClick={() => push("/users")}>
      back
    </button>
  );
};
