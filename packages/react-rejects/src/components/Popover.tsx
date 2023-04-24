import {
  createContext,
  FocusEvent,
  ReactNode,
  useContext,
  useState,
} from "react";

const IsOpenContext = createContext(false);
const ToggleOpenContext = createContext(() => {});

function useIsOpen() {
  return useContext(IsOpenContext);
}

function useToggleOpen() {
  return useContext(ToggleOpenContext);
}

function Root({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const onBlur = (e: FocusEvent) => {
    const rootEl = e.currentTarget;
    const newEl = e.relatedTarget;
    const isFocused = rootEl != newEl && rootEl.contains(newEl);
    if (!isFocused) setIsOpen(false);
  };

  return (
    <IsOpenContext.Provider value={isOpen}>
      <ToggleOpenContext.Provider value={() => setIsOpen(!isOpen)}>
        <div tabIndex={-1} onBlur={onBlur} className="group relative">
          {children}
        </div>
      </ToggleOpenContext.Provider>
    </IsOpenContext.Provider>
  );
}

function Button({ children }: { children: ReactNode }) {
  const toggleOpen = useToggleOpen();

  return (
    <button tabIndex={-1} onClick={() => toggleOpen}>
      {children}
    </button>
  );
}

function Panel({ children }: { children: ReactNode }) {
  const isOpen = useIsOpen();
  if (!isOpen) return null;

  return (
    <div
      tabIndex={-1}
      className="absolute right-0 z-10 mt-4 hidden min-w-full rounded-2xl border bg-white p-4 hover:border-gray-300 group-focus-within:block"
    >
      {children}
    </div>
  );
}

export const Popover = Object.assign(Root, { Button, Panel });
