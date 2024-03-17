### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

- What is a Promise?

- What are the differences between an async function and a regular function?

- What is the difference between Node.js and Express.js?

- What is the error-first callback pattern?

- What is middleware?

- What does the `next` function do?

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
## Answer:
- promises, async/await keyword , callback.
- A promise is a proxy for a value not necessarily known when the promise is created.
- Async function is a type of function that allows you to wite asynchrnous code in a synchrnous style syntax. The program continues to run and perform other tasks while asynchrnouse code is being excuted. async function always return a promise object while regular function is a block of code that can be defined and then called later to perform specific tasks or calculations. 
- NodeJs is an open source and crooplatform javascript code that runs on servers while expressJs is a web application workframe for nodeJs. 
- Error fiest callback is a function which either return an error object or successful data returned by the function. 
- Middleware is a fucntion runing in the middle of request and response cycle. for example, express.json() is a middleware that comes with express.
- Next function is a function in express router that when it's called, It will run or execute the code after all the middleware function is finished. 
  ```js
  async function getUsers() {
  const elie = await axios.get('https://api.github.com/users/elie');
  const joel = await axios.get('https://api.github.com/users/joelburton');
  const matt = await axios.get('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];

  }
  getUsers().then(msg=>{
  console.log(msg)
  })
  ``` 