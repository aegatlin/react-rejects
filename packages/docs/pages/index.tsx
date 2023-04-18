import { useState } from "react";
import { Button, Card, Header, Modal, Sidebar, getVibe } from "react-rejects";

const { button, card, header, modal, sidebar } = getVibe();

export default function Docs() {
  return (
    <>
      <Header classes={header} />
      <div className="flex">
        <Sidebar classes={sidebar} />
        <Main classes="flex grow flex-col items-center space-y-4" />
      </div>
    </>
  );
}

function Main({ classes }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={classes}>
      <Card classes={card}>Card content</Card>
      <Button onClick={() => setShowModal(true)} classes={button}>
        show modal
      </Button>
      {showModal && (
        <Modal onBackdropClick={() => setShowModal(false)} classes={modal}>
          <Card classes={card} />
        </Modal>
      )}
    </main>
  );
}
