'use client';

import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let position = window.pageYOffset;

    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(false);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(false);
      }
      position = scrollPos;
    };

    window.addEventListener('scroll', function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener('scroll', function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <button
      type="button"
      className={`scroll-to-top ${stick ? 'show' : ''}`}
      onClick={onClickHandler}
    >
      <ChevronUpIcon className="m-auto h-6 w-auto text-white lg:h-7" />
    </button>
  );
};

export default ScrollToTop;