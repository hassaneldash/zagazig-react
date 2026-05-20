import React from 'react';
import { useCount } from '@/store/zustand/useCount';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SecondComponent = () => {
  const count = useCount((state) => state.count);
  return (
    <div>
      <Card className='mx-auto w-full max-w-sm mb-5'>
        <CardHeader>
          <CardTitle>First Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Count: {count}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecondComponent;
