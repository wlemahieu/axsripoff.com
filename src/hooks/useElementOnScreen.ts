/* eslint-env browser */
import { useEffect, useRef, useState } from 'react';

const useElementOnScreen = (options?: Record<string, unknown>): any => {
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callback = (entries: any) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef?.current) {
      observer.observe(containerRef.current as any);
    }
    return () => {
      if (containerRef?.current) {
        observer.unobserve(containerRef.current as any);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isIntersecting];
};

export default useElementOnScreen;
