'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  className?: string;
}

export function GsapTextReveal({ children, className = '' }: Props) {
  const container = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0, rotateX: -20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={`overflow-hidden ${className}`}>
      <div ref={textRef} className="origin-top-left transform-3d perspective-distant">
        {children}
      </div>
    </div>
  );
}
