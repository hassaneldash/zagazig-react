import { Button } from '@/components/ui/button';
import React from 'react';
import { useSearchParams } from 'react-router';

const QueryParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <p>Query Parameter (q) = {searchParams.get('q')}</p>
      <p>Query Parameter (search) = {searchParams.get('search')}</p>
      <Button
        onClick={() => {
          setSearchParams({ q: 16, search: 'Hassan' });
        }}>
        Change Query Parameter
      </Button>
    </>
  );
};

export default QueryParameters;
