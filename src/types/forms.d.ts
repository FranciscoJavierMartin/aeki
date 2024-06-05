type LoginFormFields = { username: string; password: string };

type LoginFormState<T> = {
  message: string;
  errors: { [key in keyof T]?: string[] };
};
