import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { instance } from './AxiosInstance';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        // const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
        // DRY: Don't Repeat Your Self
        const response = await instance.get(`${id}`);
        console.log(response);
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setErrors(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);
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
      <Card key={user.id}>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user.role}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDetails;
