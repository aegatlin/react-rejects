import { MouseEvent, ReactNode } from "react";

interface DrawerProps {
  side?: "left" | "right";
  onBackdropClick?: (e: MouseEvent) => void;
  children?: ReactNode;
}

/**
 * You have to mount the Drawer somehow, e.g., a button click.
 * Then you can do something like `isShow && <Drawer />`.
 */
export function Drawer({
  onBackdropClick = () => {},
  children = "drawer content",
  side = "left",
}: DrawerProps) {
  const handleClick = (e: MouseEvent) => {
    const backdropEl = e.currentTarget;
    const clickedEl = e.target;
    const isBackdropClicked = backdropEl == clickedEl;
    if (isBackdropClicked) onBackdropClick(e);
  };

  const justification = side === "left" ? "justify-start" : "justify-end";

  return (
    <div
      tabIndex={-1}
      onClick={handleClick}
      className={`fixed top-0 bottom-0 left-0 right-0 z-20 flex items-stretch bg-black/30 ${justification}`}
    >
      <div className="bg-white py-8 px-16 drop-shadow-2xl">{children}</div>
    </div>
  );
}
