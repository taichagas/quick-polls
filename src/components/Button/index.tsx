import { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "solid" | "outline";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
};

export function Button({ children, variant = "solid" }: ButtonProps) {
  return (
    <button className={`${styles.btn__default} ${styles[`btn__${variant}`]}`}>
      {children}
    </button>
  );
}
