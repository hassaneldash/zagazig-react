import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import axios from 'axios';
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { instance } from './AxiosInstance';

export async function loader() {
  // const response = await axios.get('https://api.escuelajs.co/api/v1/users');
  // DRY: Don't Repeat Your Self
  const response = await instance.get();
  return response.data;
}

export async function ErrorBoundary() {
  return <div>Couldn't Load Users Page</div>;
}

const UsersPage = () => {
  const users = useLoaderData();
  return (
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
    </div>
  );
};

export default UsersPage;
