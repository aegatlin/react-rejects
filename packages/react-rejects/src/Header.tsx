import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children = "header content" }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b py-8 px-16 hover:border-gray-300">
      {children}
    </header>
  );
}
