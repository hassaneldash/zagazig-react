import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

const About = ({data}) => {
  const navigate = useNavigate();

  const isLoggedIn = false;

  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <p>About Page</p>
      <Button onClick={handleClick}>Navigate</Button>
      <p>{data}</p>
    </div>
  );
};

export default About;
