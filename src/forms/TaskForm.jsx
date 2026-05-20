import * as z from 'zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
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
import { Textarea } from '@/components/ui/textarea';
import { useSubmit } from 'react-router';
import axios from 'axios';

const taskSchema = z.object({
  title: z.string().min(3, 'Title is 3 at least'),
  description: z.string().min(5, 'description is 5 at least'),
  status: z.enum(['pending', 'completed']),
});

const TaskForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({ resolver: zodResolver(taskSchema), mode: 'onBlur' });

  const submit = useSubmit();

  const submitLogic = (data) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('status', data.status);

    submit(formData, { method: 'POST' });
  };
  return (
    <div className='w-full max-w-md'>
      <form onSubmit={handleSubmit(submitLogic)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create New Task</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor='title'>Title</FieldLabel>
                <Input id='title' placeholder='Enter title' {...register('title')} />
                {errors.title && <FieldError>{errors.title.message}</FieldError>}
              </Field>
              <Field>
                <FieldLabel htmlFor='description'>Description</FieldLabel>
                <Input
                  id='description'
                  placeholder='Enter description'
                  {...register('description')}
                />
                {errors.description && (
                  <FieldError>{errors.description.message}</FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor='status'>Status</FieldLabel>
                <Select id='status' {...register('status')}>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='pending'>Pending</SelectItem>
                      <SelectItem value='completed'>Completed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.status && <FieldError>{errors.status.message}</FieldError>}
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation='horizontal'>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting' : 'Submit'}
            </Button>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export async function createTaskAction({ request }) {
  const formData = await request.formData();

  const task = {
    title: formData.get('title'),
    description: formData.get('description'),
    status: formData.get('status'),
  };

  const res = await axios.post('https://retoolapi.dev/AumzOh/tasks', task);
  return res.data;
}

export default TaskForm;
