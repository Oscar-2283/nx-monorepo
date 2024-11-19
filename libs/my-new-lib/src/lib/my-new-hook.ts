import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseMyNewHook {
  count: number;
  increment: () => void;
}

export function useMyNewHook(): UseMyNewHook {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}

export default useMyNewHook;
