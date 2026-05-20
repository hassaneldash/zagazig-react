import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

const loginSchema = z.object({
  email: z.email('Invalid Email Address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  // confirm: z.string(),
});
// .refine((data) => data.password === data.confirm, {
//   message: "Passwords don't match",
//   path: ['confirm'],
// });

export function LoginForm({ className, ...props }) {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({ resolver: zodResolver(loginSchema), mode: 'onBlur' });

  const submitLogic = (data) => {
    console.log(data);
    (async () => {
      try {
        const response = await axios.post('https://retoolapi.dev/AumzOh/users', data);
        console.log(response.data);
      } catch (err) {
        const message = err.response?.data?.message || 'Something went wrong';
        console.error(message);
      }
    })();
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submitLogic)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  {...register(
                    'email',
                    // {
                    //   required: true,
                    //   maxLength: 20,
                    //   pattern: /^[A-Za-z1-9]+$/,
                    // }
                  )}
                />
                {errors.email && <FieldError>{errors.email.message}</FieldError>}
              </Field>
              <Field>
                <div className='flex items-center'>
                  <FieldLabel htmlFor='password'>Password</FieldLabel>
                  <a
                    href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                    Forgot your password?
                  </a>
                </div>
                <Input id='password' type='password' {...register('password')} />
                {errors.password && <FieldError>{errors.password.message}</FieldError>}
              </Field>
              {/* <Field>
                <div className='flex items-center'>
                  <FieldLabel htmlFor='confirm'>Confirm Password</FieldLabel>
                  <a
                    href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
                    Forgot your password?
                  </a>
                </div>
                <Input id='confirm' type='password' {...register('confirm')} />
                {errors.confirm && <FieldError>{errors.confirm.message}</FieldError>}
              </Field> */}
              <Field>
                <Button type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in' : 'Login'}
                </Button>
                <Button variant='outline' type='button' disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in' : 'Login with Google'}
                </Button>
                <FieldDescription className='text-center'>
                  Don&apos;t have an account? <a href='#'>Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
