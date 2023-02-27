## Portals in React

In React, components are typically rendered within a specific parent component's DOM hierarchy. However, there are scenarios where developers need to render a component outside of its parent component. This is where createPortal comes in.

**createPortal is a method provided by the ReactDOM library that enables developers to render a React component into a different part of the DOM hierarchy**, rather than being nested within its parent component. This means that a component rendered with createPortal can be placed anywhere in the DOM, even outside the root element of the React application.

### When to use createPortal?

##### Usage from React documentation

- Rendering to a different part of the DOM
- Rendering a modal dialog with a portal
- Rendering React components into non-React server markup
- Rendering React components into non-React DOM nodes

##### Usage examples from practice

- Modals and tooltips
- Profile and product card - for example, when you hover on user avatar or product miniature picture - there are pop-up cards with information about it
- Loading screens for preventing the user interacts with the app when app is loading
- Cookie alerts

### How to use

```js
import { createPortal } from "react-dom";

<div>
  {createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  )}
</div>;
```

As for me important things to know:
➡️ Especially useful that portaled component can access context from parent.
➡️ Events from portals propagate according to the React tree rather than the DOM tree.

### Pros and Cons of createPortal

##### Pros

**Flexibility**: CreatePortal provides greater flexibility in terms of where components can be rendered in the DOM hierarchy, enabling developers to create complex and dynamic layouts.

**Separation of Concerns**: Using createPortal can help to separate concerns, making it easier to manage the state and behavior of different components.

**Accessibility**: By rendering components outside of their parent component's DOM hierarchy, developers can ensure that they are accessible to assistive technologies such as screen readers.

##### Cons:

**Complexity**: Using createPortal can add complexity to a React application, making it harder to understand and maintain.

**Potential for Conflicts**: Rendering components outside of their parent component's DOM hierarchy can lead to conflicts with other components on the page.

**Security**: Creating portals that render outside of the component tree can make it harder to ensure the security of the application.

### Useful links

[React documentation](https://beta.reactjs.org/reference/react-dom/createPortal)
[Modal example with createPortal + custom portal hook on blog.logrocket](https://blog.logrocket.com/learn-react-portals-example/)
