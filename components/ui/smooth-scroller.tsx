'use client';

import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time: number) {
      // @ts-expect-error lenis is attached to the ref at runtime
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
