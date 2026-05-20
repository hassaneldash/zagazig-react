import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { instance } from './AxiosInstance';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        // const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        // DRY: Don't Repeat Your Self
        const response = await instance.get();

        console.log(response);
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleClick = async () => {
    const data = {
      email: 'john@mail.com',
      password: 'changeme',
      name: 'Jhon',
      role: 'customer',
      avatar: 'https://i.imgur.com/LDOO4Qs.jpg',
      creationAt: '2026-05-16T00:14:25.000Z',
      updatedAt: '2026-05-16T00:14:25.000Z',
    };

    // const response = await axios.post('https://api.escuelajs.co/api/v1/users', data);
    // DRY: Don't Repeat Your Self
    const response = await instance.post('/', data);
    console.log(response.data);
  };
  return (
    <>
      <div>
        {isLoading && (
          <Card className='w-full max-w-xs'>
            <CardHeader>
              <Skeleton className='h-4 w-2/3' />
              <Skeleton className='h-4 w-1/2' />
            </CardHeader>
            <CardContent>
              <Skeleton className='aspect-video w-full' />
            </CardContent>
          </Card>
        )}
      </div>
      <div> {errors && <p>{errors}</p>} </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4'>
        {users.map((user) => (
          <Link to={`/users/${user.id}`}>
            <Card key={user.id}>
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{user.role}</p>
              </CardContent>
            </Card>
          </Link>
        ))}

        <Button onClick={handleClick}>Post</Button>

        {/* <a href='/about'>About Anchor</a> */}
        <Link to='/about'>About</Link>
      </div>
    </>
  );
};

export default Users;
