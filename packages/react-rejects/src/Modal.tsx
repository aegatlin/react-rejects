import { MouseEvent, ReactNode } from "react";

interface ModalProps {
  onBackdropClick?: (e: MouseEvent) => void;
  children?: ReactNode;
  classes?: string;
}

/**
 * Something external to the modal has to reveal it. I.e., `showModal && <Modal
 * />`. The code to toggle off the modal should be called within
 * `onBackdropClick`. If you want backdrop click to no-op, then you can provide
 * a child element that, e.g., closes the modal on click, amongst other things
 */
export function Modal({
  onBackdropClick = () => {},
  children = "modal content",
  classes = "",
}: ModalProps) {
  const handleClick = (e: MouseEvent) => {
    const backdropEl = e.currentTarget;
    const clickedEl = e.target;
    const isBackdropClicked = backdropEl == clickedEl;
    if (isBackdropClicked) onBackdropClick(e);
  };

  return (
    <div tabIndex={-1} onClick={handleClick} className={classes}>
      {children}
    </div>
  );
}
