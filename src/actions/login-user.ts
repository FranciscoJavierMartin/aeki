'use server';

export async function loginUser(
  prev: LoginFormState<LoginFormFields>,
  formData: FormData,
) {
  let message: string = '';
  let errors: { [key in keyof LoginFormFields]?: string[] } = {};

  console.log(formData);

  return {
    message,
    errors,
  };
}
