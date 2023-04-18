import { ReactNode } from "react";

interface SidebarProps {
  children?: ReactNode;
  classes?: string;
}

export function Sidebar({
  children = "sidebard content",
  classes,
}: SidebarProps) {
  return <div className={classes}>{children}</div>;
}
