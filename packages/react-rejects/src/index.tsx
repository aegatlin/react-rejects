export function Button() {
  const handleClick = () => {
    console.log("button clicked!");
  };

  return (
    <button className="" onClick={() => console.log("button clicked")}>
      button
    </button>
  );
}
