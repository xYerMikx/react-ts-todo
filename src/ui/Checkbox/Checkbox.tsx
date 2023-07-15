import { FC } from "react";
import styles from "./Checkbox.module.scss"

interface CheckboxProps {
  id: string;
  defaultChecked: boolean;
  onClick: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ id, defaultChecked, onClick }) => (
  <>
    <input
      className={styles.checkbox}
      type="checkbox"
      defaultChecked={defaultChecked}
      id={id}
      onClick={onClick}
    />
    <label className={styles.label} htmlFor={id}></label>
  </>
);