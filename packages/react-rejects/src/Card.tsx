export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-4 p-8 overflow-hidden rounded-2xl border shadow-sm hover:border-gray-300">
      {children}
    </div>
  );
}
