import React from 'react';
import { useCount } from '@/store/zustand/useCount';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SecondComponent = () => {
  const count = useCount((state) => state.count);
  return (
    <div className='mb-5'>
      <Card>
        <CardHeader>
          <CardTitle>Second Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Count: {count}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecondComponent;
