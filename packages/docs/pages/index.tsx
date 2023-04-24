import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  Header,
  Modal,
  Sidebar,
  getVibe,
  themes,
  Popover,
} from "react-rejects";

function links() {
  return [
    { name: "Button", href: "/button" },
    { name: "Link", href: "/link" },
  ];
}

export default function Docs() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const classes = getVibe(themes[themeIndex]);

  const nextTheme = () => {
    setThemeIndex(themeIndex === 0 ? 1 : 0);
  };

  return (
    <>
      <Header classes={classes.header} />
      <div className="flex">
        <Sidebar classes={classes.sidebar}>
          <div className="flex flex-col items-start space-y-8 text-xl">
            {links().map((l) => (
              <Link key={l.href} href={l.href} className={classes.link}>
                {l.name}
              </Link>
            ))}
          </div>
        </Sidebar>
        <main className="flex grow flex-col items-center space-y-4">
          <Button onClick={nextTheme} classes={classes.button}>
            next theme
          </Button>
          <Popover>
            <Popover.Button>Popover</Popover.Button>
            <Popover.Panel>popover panel content</Popover.Panel>
          </Popover>
          <Card classes={classes.card}>
            <div className="flex max-w-md flex-col items-center space-y-8">
              <p>
                {
                  "This website is built with react-rejects components. Let's take a look at some of the most interesting features. You can apply custom stylings. For example, the button with current styles looks like this"
                }
              </p>
              <Button classes={classes.button} />
              <p>{"But you can pass in custom classes too"}</p>
              <Button classes="bg-green-500 border-4 border-double drop-shadow-2xl shadow-2xl shadow-red-500 drop-shadow-blue-500 p-4 text-white text-lg font-bold" />
              <p>{"Gorgeous"}</p>
              <p>
                {
                  "Custom styles lets you keep the the structure and logic of the component, but change the style (but be careful because sometimes style affects function!"
                }
              </p>
              <p>
                {
                  "If you want to further customize the component, you can fully `eject` from it and begin with a component that works with your current codebase."
                }
              </p>
            </div>
          </Card>
          <Button onClick={() => setShowModal(true)} classes={classes.button}>
            show modal
          </Button>
          {showModal && (
            <Modal
              onBackdropClick={() => setShowModal(false)}
              classes={classes.modal}
            >
              <Card classes={classes.card} />
            </Modal>
          )}
        </main>
      </div>
    </>
  );
}
