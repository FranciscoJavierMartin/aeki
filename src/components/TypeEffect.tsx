'use client';
import { useEffect, useState } from 'react';

export default function TypeEffect({
  textCompleted,
}: {
  textCompleted: string;
}) {
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < textCompleted.length) {
        setDisplayText((prev) => prev + textCompleted.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return <h1 className='text-center text-4xl text-white'>{displayText}</h1>;
}
