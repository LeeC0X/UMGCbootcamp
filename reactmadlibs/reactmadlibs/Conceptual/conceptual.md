### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- React is a JavaScript library for building user interfaces.
- React is used to build single-page applications.
- React is a good option because it allows us to create reusable UI components.

- What is Babel?
- Babel is a JavaScript compiler that includes the ability to compile JSX into regular JavaScript.

- What is JSX?
- JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code).

- How is a Component created in React?
- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

- What are some difference between state and props?
- The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.

- What does "downward data flow" refer to in React?
- Downward data flow is the idea that parent components pass data down to their children via props.

- What is a controlled component?
- A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

- What is an uncontrolled component?
- A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it.

- What is the purpose of the `key` prop when rendering a list of components?
- React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
- An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?
- By using this Hook, you tell React that your component needs to do something after render.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
- Essentially, useRef is like a “box” that can hold a mutable value in its .current property. No it won't re rerender automatically.

- When would you use a ref? When wouldn't you use one?
- Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.

- What is a custom hook in React? When would you want to write one?
- Custom hooks are customized functional components that you can use throughout your react app.
