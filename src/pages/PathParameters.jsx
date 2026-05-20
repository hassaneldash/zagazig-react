import React from 'react';
import { useParams } from 'react-router';

const PathParameters = () => {
  const { id, name } = useParams();
  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
};

export default PathParameters;
