import { Button, Card, Drawer, Header } from "react-rejects";
import { useState } from "react";

export default function Docs() {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleClick = () => {
    setShowDrawer(true);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <Card>Card content</Card>
        <Button onClick={handleClick}>show drawer</Button>
      </div>
      {showDrawer && (
        <Drawer onBackdropClick={() => setShowDrawer(false)}>
          drawer content
        </Drawer>
      )}
    </>
  );
}
