import React, { FC } from "react";
import { shadeColor } from "../../helpers/shadeColor";
import styles from "./Button.module.scss";

type ButtonChildren = {
  name: string;
  color: ButtonColors;
  textColor?: string;
  onClick?: () => void;
};

export enum ButtonColors {
  "main" = "#9994ff",
  "edit" = "#ffffff",
  "delete" = "#fe5a62",
}

export const Button: FC<ButtonChildren> = ({
  name,
  color,
  textColor,
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: textColor,
        border: `1px solid ${shadeColor(color, -30)}`,
      }}
      className={styles.button}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
