interface Vibe {
  card: string;
  button: string;
  header: string;
  modal: string;
  sidebar: string;
}

export function getVibe(): Vibe {
  return old;
}

/**
 * ## Notes
 *
 * - sidebar is styled to be on the left because `border-r`
 * - modal is styled to be centered no matter what or where it is
 */
const old: Vibe = {
  card: "m-4 overflow-hidden rounded-2xl border p-8 shadow-sm hover:border-gray-300 bg-white",
  button:
    "flex w-max space-x-1 rounded-full bg-blue-500 py-4 px-6 text-white shadow-md focus:ring hover:enabled:bg-blue-600 hover:enabled:shadow-xl active:enabled:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none",
  header:
    "flex items-center justify-between border-b py-8 px-16 hover:border-gray-300",
  modal:
    "fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-black/30",
  sidebar:
    "flex flex-col items-center border-r bg-green p-8 w-80 hover:border-gray-300",
};
