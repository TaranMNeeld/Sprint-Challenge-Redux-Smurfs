1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Answer: Reduce, map, and filter are all Array/Object methods that do not produce side-effects. The Object.create function creates a new object, with all of the same properties of a specified object.

1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Answer:
Actions - An action in Redux is the functionality that is dispatched based off of an action type set by specific user input.
Reducer - A reducer in Redux is a tree that the actions dispatch to. The action type is read and data from the action is set to specific data in the state.
Store - The store in Redux is know as a "single source of truth" because it is where all of the data is held within the state. The store allows for easier state management by keeping all of the state data in one place. Also, the store updates the UI based off of the data that is set within the reducer.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Answer - Component state is the state of data within a specific component, and that data can only be accessed elsewhere by drilling the props through the components. Application state is the state of the data within the entire application, and that data can be accessed anywhere is the application by connecting the necessary components to the store. 
It is a good idea to utilize application state in larger programs, so that the state is easier to manage, and the code can stay cleaner than when using component state.

1.  What is middleware?
Answer - Middleware is a middle point that data goes to, so that it can be manipulated before reaching its endpoint.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk gives a better way to program action creators. It allows us to run asynchronous operations with the different actions. With redux-thunk,we can use an action creator to return another function, rather than just an action. This allows us to have more control over what happens with the different actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?
Answer - The connect method links the components to the store.
