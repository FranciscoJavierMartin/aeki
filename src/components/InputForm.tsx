import { InputHTMLAttributes } from 'react';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string[];
}

export default function InputForm({
  id,
  placeholder,
  errors = [],
  ...props
}: InputFormProps) {
  return (
    <div className={'mx-0 mt-5'}>
      <div className={'relative mb-7 w-full'}>
        <div className='absolute flex w-full items-center rounded-md border-0 border-b-2 border-solid border-[#5c5c5e] focus-within:border-purple-500'>
          <input
            id={id}
            placeholder={placeholder}
            className='peer flex-grow bg-transparent px-3 py-2 outline-none'
            {...props}
          />
          <label
            htmlFor={id}
            className={`absolute left-0 top-0 px-3 py-2 transition-all peer-focus-within:-top-3 peer-focus-within:p-0 peer-focus-within:text-xs peer-focus-within:text-purple-500 peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:p-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-purple-500`}
          >
            {placeholder}
          </label>
        </div>
      </div>
      {errors.length > 0 && (
        <div className='ml-2 mt-12 text-sm text-red-400'>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}
