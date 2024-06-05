import { loginUserSchema } from '@/lib/validations/loginUserSchema';

export async function loginUser(
  prev: LoginFormState<LoginFormFields>,
  formData: FormData,
) {
  let message: string = '';
  let errors: { [key in keyof LoginFormFields]?: string[] } = {};
  const data = {
    username: formData.get('username'),
    password: formData.get('password'),
  };

  const validatedFields = loginUserSchema.safeParse(data);

  try {
    if (validatedFields.success) {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(validatedFields.data),
      }).then((res) => res.json());

      //TODO: Set JWT
    } else {
      errors = validatedFields.error?.flatten().fieldErrors;
    }
  } catch (error) {
    message = 'Ups, something went wrong. Please try again.';
  }

  return {
    message,
    errors,
  };
}
