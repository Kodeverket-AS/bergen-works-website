interface PaginationContainerProps {
  /**
   * Active page number
   */
  current: number;
  /**
   * How many pages are available?
   */
  max: number;
  /**
   * When this component is used with dynamic routing you can specify the base url
   */
  rootUrl?: string;
}

export function PaginationContainer({ current = 1, max, rootUrl = "" }: PaginationContainerProps) {
  return (
    <div className="flex justify-center gap-2 py-4 w-full">
      <span>prev</span>
      <span>1</span>
      <span>2</span>
      <span>...</span>
      <span>9</span>
      <span>10</span>
      <span>next</span>
    </div>
  );
}
