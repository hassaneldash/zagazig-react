import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation, useSubmit, useLoaderData } from 'react-router';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Trash2, RefreshCcw } from 'lucide-react';
import { redirect } from 'react-router';
import * as z from 'zod';

const BASE_URL = 'https://retoolapi.dev/StjsKj/data';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTasks = async () => {
  const response = await instance.get('/');
  return response.data;
};

export const createTask = async (data) => {
  const response = await instance.post('/', data);
  return response.data;
};

export const updateTask = async (id, data) => {
  const response = await instance.put(`/${id}`, data);
  return response.data;
};

export const deleteTask = async (id) => {
  await instance.delete(`/${id}`);
  return true;
};

export async function taskLoader() {
  return getTasks();
}

export async function createTaskAction({ request }) {
  const formData = await request.formData();
  const task = {
    title: formData.get('title'),
    description: formData.get('description'),
    status: formData.get('status'),
  };
  await createTask(task);
  return redirect('/tasks');
}

export async function updateTaskAction({ request, params }) {
  const formData = await request.formData();
  const task = {
    title: formData.get('title'),
    description: formData.get('description'),
    status: formData.get('status'),
  };
  await updateTask(params.id, task);
  return redirect('/tasks');
}

export async function deleteTaskAction({ request }) {
  const formData = await request.formData();
  const id = formData.get('id');
  await deleteTask(id);
  return null;
}

export const taskSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  description: z.string().min(5, 'Description must be at least 3 characters long'),
  status: z.enum(['pending', 'completed']),
});

export const TaskForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(taskSchema), mode: 'onBlur' });

  const submit = useSubmit();

  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  const submitLogic = (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('status', data.status);
    submit(formData, { method: 'post' });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitLogic)}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='title'>Title</FieldLabel>
            <Input
              id='title'
              type='text'
              placeholder='Enter title'
              {...register('title')}
            />
            <FieldDescription>Choose a unique Title</FieldDescription>
            <FieldError>{errors.title?.message}</FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor='description'>Description</FieldLabel>
            <Input
              id='description'
              type='text'
              placeholder='Enter description'
              {...register('description')}
            />
            <FieldDescription>Please, enter description</FieldDescription>
            <FieldError>{errors.description?.message}</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor='status'>Status</FieldLabel>
            <Select id='status' {...register('status')}>
              <SelectTrigger className='w-45'>
                <SelectValue placeholder='Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='pending'>Pending</SelectItem>
                  <SelectItem value='completed'>Completed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldError>{errors.status?.message}</FieldError>
          </Field>

          <Button type='submit' disabled={isSubmitting} className='w-full'>
            {isSubmitting ? 'Saving...' : 'Save Task'}
          </Button>
        </FieldGroup>
      </form>
    </>
  );
};

export const TaskPage = () => {
  const tasks = useLoaderData();

  const submit = useSubmit();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append('id', id);
    submit(formData, { method: 'post' });
  };

  const handleToggle = (task) => {
    const formData = new FormData();
    formData.append('id', task.id);
    formData.append('title', task.title);
    formData.append('description', task.description);
    formData.append('status', task.status === 'pending' ? 'completed' : 'pending');
    submit(formData, { method: 'post', action: `/update/${task.id}` });
  };
  return (
    <div className='grid gap-4 p-4'>
      {tasks.map((task) => (
        <Card key={task.id} className='w-full max-w-md'>
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
            <CardDescription className='uppercase text-xs font-bold'>
              Status: {task.status}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className='text-sm text-muted-foreground'>{task.description}</p>
          </CardContent>

          <CardFooter className='flex justify-end gap-2'>
            <Button variant='outline' size='sm' onClick={() => handleToggle(task)}>
              <RefreshCcw className='mr-2 h-4 w-4' />
              Toggle
            </Button>

            <Button variant='destructive' size='sm' onClick={() => handleDelete(task.id)}>
              <Trash2 className='mr-2 h-4 w-4' />
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
