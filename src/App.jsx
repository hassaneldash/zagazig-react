import React, { useState } from 'react';
import About from './pages/About';
import { Button } from './components/ui/button';
import FirstComponent from './pages/FirstComponent';
import SecondComponent from './pages/SecondComponent';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseByValue, reset } from './store/redux/counterSlice';
const App = () => {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      {/* <Button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        Count: {count}
      </Button>

      <About data={count} /> */}
      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-5'>
        Zustand
      </h1>
      <FirstComponent />

      <SecondComponent />

      <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-5'>
        Redux Toolkit (RTK)
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Count: {count}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => dispatch(increase())}>increase</Button>
          <Button className='ms-2' variant='outline' onClick={() => dispatch(decrease())}>
            decrease
          </Button>
          <Button className='ms-2' onClick={() => dispatch(increaseByValue(25))}>
            Increase By 25
          </Button>
          <Button className='ms-2' variant='outline' onClick={() => dispatch(reset())}>
            Reset
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default App;

// React => Vite
// JSX
// CSS inside JS => CSS Modules
// CSS => TailwindCSS
// Component Library => Shadcn
// Event Handling
// States => useState
// List/Collection Rendering => .map + key
// Conditional Rendering => Ternary Operator + && Logical Operator
// HTTP Request => fetchAPI, Axios
// Routing + Navigation => React Router v7 (Data Mode)

// Props (Properties) is Static Data => Data Flow is unidirectional (Parent => Child)

// Prop Drilling =>

// Global State Management
// 1. Publisher/Subscriber Model

// Zustand => npm i zustand
// 1. Create Store => useCount

// Context API => does not manage state, it distribute
// 1. Create Context
// 2. Create Provider => useState
// 3. Wrap entire Application with Provider
// 4. Consume State with Special Hook

// Redux => npm i @reduxjs/toolkit react-redux
// 1. Create a redux store
// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({

// })

// export default store

// 2. Provide Redux store to entire Application
/*
<StrictMode>
<ThemeProvider>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</ThemeProvider>
</StrictMode>

*/

// 3. Create a Redux Slice (Logical Grouping)

/*
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // Internal identifier for this slice
  initialState: { value: 0 },
  reducers: {
    // RTK automatically base on reducers => generate "Actions"
    reset: (state) => {
      state.value = 0; // Immer handle immutability behind the scene/under the hood
    },

    increase: (state) => {
      state.value += 1; // Immer handle immutability behind the scene/under the hood
    },

    decrease: (state) => {
      state.value -= 1; // Immer handle immutability behind the scene/under the hood
    },

    increaseByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

// To use Actions => We must export the generated Actions
export const { reset, increase, decrease, increaseByValue } = counterSlice.actions;

// We must export the reducers to wire it into main store
export default counterSlice.reducer;

*/

// 4. Add Slice Reducers inside Store
/*
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;


*/

// Use Redux State and Actions in the React Component
// useDispatch, useSelector

// React Hook Form => npm i react-hook-form

// Zod => npm i zod @hookform/resolvers

// React Router Actions

// Deployment

// Custom Hooks

// Server States

// React Query

// TanStack
