import { z } from 'zod';

export const loginUserSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .trim()
    .min(4, { message: 'Username must be at least 4 characters long' }),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(4, { message: 'Password must be at least 4 characters long' }),
});
