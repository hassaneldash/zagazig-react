import React from 'react';
import { useLoaderData, useRouteError, isRouteErrorResponse, Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { instance } from './AxiosInstance';

// 1. Define the Loader Function (This runs before the component renders)
export async function loader() {
  try {
    const response = await instance.get();
    return response.data;
  } catch (error) {
    // Throwing the error lets React Router catch it and trigger the ErrorBoundary
    throw new Response("Failed to load users data.", { status: 500 });
  }
}

// 2. Define the Error Boundary Component
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className='max-w-md mx-auto my-12 p-6 text-center bg-destructive/10 border-2 border-destructive text-destructive rounded-xl'>
      <h2 className='text-2xl font-bold mb-2'>Something went wrong!</h2>
      <p className='text-sm opacity-90'>
        {isRouteErrorResponse(error) 
          ? `${error.status}: ${error.data}` 
          : error instanceof Error ? error.message : "An unexpected routing error occurred."
        }
      </p>
    </div>
  );
}

// 3. The Main Page Component
const UsersPage = () => {
  // Pulls data resolved directly from your loader
  const users = useLoaderData();

  return (
    <>
      <section className='bg-muted/30 pb-6 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-primary'>
            Users
          </h1>
        </div>
      </section>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6'>
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>
            <Card className='group overflow-hidden rounded-xl border-2 transition-all hover:border-blue-500'>
              <CardHeader className='px-4'>
                <div className='relative aspect-square overflow-hidden bg-muted'>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <CardTitle className='line-clamp-1 text-lg font-bold'>
                    {user.name}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className='px-4 pb-2'>
                <p className='line-clamp-2 text-sm text-muted-foreground'>{user.email}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UsersPage;