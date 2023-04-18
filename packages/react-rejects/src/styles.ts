const old: Vibe = {
  card: "m-4 overflow-hidden rounded-2xl border p-8 shadow-sm hover:border-gray-300",
  button:
    "flex w-max space-x-1 rounded-full bg-blue-500 py-4 px-6 text-white shadow-md focus:ring hover:enabled:bg-blue-600 hover:enabled:shadow-xl active:enabled:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none",
  header:
    "flex items-center justify-between border-b py-8 px-16 hover:border-gray-300",
};

interface Vibe {
  card: string;
  button: string;
  header: string;
}

export function getVibe(): Vibe {
  return old;
}
