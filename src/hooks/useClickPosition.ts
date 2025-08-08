import { useState } from 'react';

interface ClickPosition {
  x: number;
  y: number;
}

/**
 * Hook for capturing the mouse position when an element is clicked.
 *
 * @returns A tuple containing:
 *  - `position`: The latest click position as `{ x, y }` in viewport coordinates.
 *  - `handleClick`: A function to be used as an `onClick` handler to update the position.
 *
 * @example
 * const [position, handleClick] = useClickPosition();
 * return <div onClick={handleClick}>Click me</div>
 */
export function useClickPosition(): [ClickPosition, (event: React.MouseEvent) => void] {
  const [position, setPosition] = useState<ClickPosition>({ x: 0, y: 0 });

  const updatePosition = (event: React.MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return [position, updatePosition];
}
