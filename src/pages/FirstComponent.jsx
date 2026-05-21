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

const FirstComponent = () => {
  // Consume Data From Zustand Store
  const count = useCount((state) => state.count);

  // Consume Actions From Zustand Store
  const reset = useCount((state) => state.reset);
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);
  const incrementByTen = useCount((state) => state.incrementByTen);
  const incrementByValue = useCount((state) => state.incrementByValue);

  return (
    <div className='mb-2'>
      <Card>
        <CardHeader>
          <CardTitle>First Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Count: {count}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={reset}>Reset</Button>
          <Button className='ms-2' variant='outline' onClick={increment}>
            Increment
          </Button>
          <Button className='ms-2' onClick={decrement}>
            Decrement
          </Button>

          <Button className='ms-2' variant='outline' onClick={incrementByTen}>
            Increment By Ten
          </Button>
          <Button
            className='ms-2'
            onClick={() => {
              incrementByValue(15);
            }}>
            Increment By Value
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FirstComponent;
