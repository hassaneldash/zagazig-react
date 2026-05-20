import { useCount } from '@/store/zustand/useCount';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FirstComponents = () => {
  // Consume Data From Zustand Store
  const count = useCount((state) => state.count);

  // Consume Actions From Zustand Store
  const reset = useCount((state) => state.reset);
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);
  const incrementByTen = useCount((state) => state.incrementByTen);
  const incrementByValue = useCount((state) => state.incrementByValue);

  return (
    <>
      <Card className='mx-auto w-full max-w-sm mb-5'>
        <CardHeader>
          <CardTitle>First Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Count: {count}</p>
        </CardContent>
        <CardFooter>
        <Button onClick={reset}>Reset</Button>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>

          <Button onClick={incrementByTen}>Increment By Ten</Button>
          <Button
            onClick={() => {
              incrementByValue(15);
            }}>
            Increment By Value
          </Button>
          
        </CardFooter>
      </Card>
    </>
  );
};

export default FirstComponents;
