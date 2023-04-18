import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
}

export function Button({
  children = "button",
  disabled = false,
  onClick = () => {},
  classes = "",
}: ButtonProps) {
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
