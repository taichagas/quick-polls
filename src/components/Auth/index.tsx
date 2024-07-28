import { ReactNode } from "react";
import styles from "./Auth.module.css";

type AuthProps = {
  children: ReactNode;
};

export function Auth({ children }: AuthProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
