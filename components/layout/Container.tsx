import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className = '', ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </div>
  );
}
