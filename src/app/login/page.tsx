'use client';
import { useFormState, useFormStatus } from 'react-dom';
import InputForm from '@/components/InputForm';
import { loginUserSchema } from '@/lib/validations/loginUserSchema';
import { redirect, useRouter } from 'next/navigation';
import { loginUser } from '@/use-cases/login-user';

const initialState: LoginFormState<LoginFormFields> = {
  message: '',
  errors: {},
};

export default function LoginPage() {
  const { pending } = useFormStatus();
  const router = useRouter();

  async function loginUserClient(
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
        console.log(res);

        //TODO: Set JWT
        // redirect('/');
        router.push('/');
        // return redirect('/');
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

  const [state, formAction] = useFormState(loginUser, initialState);

  return (
    <div className='grid min-h-screen w-full grid-cols-[2fr_1fr]'>
      <div className='bg-blue-400'></div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl'>Login</h2>
        <form
          action={formAction}
          className='mt-4 flex w-[300px] flex-col gap-2'
        >
          <InputForm
            id='username'
            name='username'
            placeholder='Username'
            defaultValue='John'
            errors={state.errors.username}
          />
          <InputForm
            id='password'
            name='password'
            placeholder='Password'
            type='password'
            defaultValue='Test'
            errors={state.errors.password}
          />
          <button
            disabled={pending}
            className='mt-6 w-full rounded-md bg-purple-500 px-3 py-2 text-white outline-none hover:bg-purple-600'
          >
            Login
          </button>
          {state.message && (
            <p className='text-sm text-red-400'>{state.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
