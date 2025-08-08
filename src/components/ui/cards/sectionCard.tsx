import { ComponentProps, ReactNode } from 'react';

interface SectionCardProps extends ComponentProps<'section'> {
  children: ReactNode;
}

/**
 * Simple wrapper component that applies some default styles to a section tag
 * @example
 * ```tsx
 * <SectionCard className="bg-white">
 *   <h1>test</h1>
 *   <p>sample text</p>
 * </SectionCard>
 * ```
 */
export function SectionCard(props: SectionCardProps) {
  const { children, className, ...rest } = props;
  return (
    <section {...rest} className={`w-full flex flex-col gap-2 p-4 border border-gray-200 shadow-md rounded-md ${className}`}>
      {children}
    </section>
  );
}
