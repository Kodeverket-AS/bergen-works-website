import { ComponentProps, ReactNode } from 'react';

interface SectionWrapperProps extends ComponentProps<'section'> {
  children: ReactNode;
}

/**
 * Simple wrapper component that applies some default styles to a section tag
 * @example
 * ```tsx
 * <SectionWrapper className="bg-white">
 *   <h1>test</h1>
 *   <p>sample text</p>
 * </SectionWrapper>
 * ```
 */
export function SectionWrapper(props: SectionWrapperProps) {
  const { children, className, ...rest } = props;
  return (
    <section
      {...rest}
      className={`flex flex-col gap-4 p-4 border border-gray-200 shadow-md rounded-md ${className}`}
    >
      {children}
    </section>
  );
}
