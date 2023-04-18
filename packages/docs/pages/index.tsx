import { Button, Card, Drawer, Header, getVibe } from "react-rejects";
import { useState } from "react";

const { button, card, header } = getVibe();

export default function Docs() {
  // const [showDrawer, setShowDrawer] = useState(false);

  const handleClick = () => {
    // setShowDrawer(true);
  };

  return (
    <>
      <Header classes={header} />
      <div className="flex flex-col items-center">
        <Card classes={card}>Card content</Card>
        <Button onClick={handleClick} classes={button}>
          show drawer
        </Button>
      </div>
      {/* {showDrawer && (
        <Drawer onBackdropClick={() => setShowDrawer(false)}>
          drawer content
        </Drawer>
      )} */}
    </>
  );
}
