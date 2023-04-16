# react rejects

React rejects are React components you can `eject` from. When you eject, you get a
generated component file, the implementation you were previously depending on. This gives you 
a generated template to build on that is guaranteed to be immediately compatible with your
app. Also, if you ever want to return to the dependency version of the component, you can just delete
your customized component. This gives you a lot of upsides and no downsides:

- A component library when you don't want control
- A component generator when you do want control
- Move between the two, custom components and library components, on a _per component_ basis

## Getting started

```sh
npm i react-rejects
```

```tsx
// src/Page.tsx
import {Button} from 'react-rejects';

function Page() {
  return (
    <div>
      <Button>
        hello
      </Button>
    </div>
  )
}
```

```sh
npx reject Button --path ./src/components/Button.tsx
```

```tsx
// src/Page.tsx
import {Button} from './src/component/Button.tsx';

...
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
