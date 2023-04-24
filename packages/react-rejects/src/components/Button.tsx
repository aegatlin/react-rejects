import { MouseEvent, ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
}
type Button2Props = Omit<ButtonProps, "classes">;

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

export function ButtonBuilder({ classes }: { classes: string }) {
  return function Button({ disabled, onClick, children }: Button2Props) {
    return (
      <button className={classes} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  };
}
