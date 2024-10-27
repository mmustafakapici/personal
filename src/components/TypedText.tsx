import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const expertise = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Image Processing',
  'Pattern Recognition',
  'Data Science'
];

export default function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: expertise,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
      shuffle: true,
      autoInsertCss: true,
      preStringTyped: (arrayPos, self) => {
        const colors = [
          'text-blue-500',
          'text-green-500',
          'text-purple-500',
          'text-red-500',
          'text-yellow-500',
          'text-pink-500',
          'text-indigo-500'
        ];
        if (el.current) {
          el.current.className = `inline font-geistMono ${colors[arrayPos % colors.length]}`;
        }
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}