import { ComponentProps, createElement, ReactNode } from 'react';

interface HeadingProps {
  /** Which heading tag to use, defaults to h2 */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Optional Tailwind class string applied to the rendered heading element. */
  className?: ComponentProps<'h1'>['className'];
  /** Heading content. Usually a string such as the title, but can be any React node. */
  children?: ReactNode;
}

/**
 * Renders a semantic HTML heading (`h1`–`h6`) based on the `type` prop.
 *
 * This component is useful when you want to vary the heading level dynamically
 * while keeping shared styles. It uses `React.createElement` under the hood,
 * avoiding conditional branching or multiple components.
 *
 * @example
 * // Renders an <h1> with Tailwind classes
 * <Heading type="h1" className="text-2xl font-semibold">Neato</Heading>
 */
export function Heading({ type = 'h2', className, children }: HeadingProps) {
  return createElement(type, { className }, children);
}
