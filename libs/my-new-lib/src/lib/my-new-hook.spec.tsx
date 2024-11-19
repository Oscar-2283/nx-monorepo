import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useMyNewHook from './my-new-hook';

describe('useMyNewHook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useMyNewHook());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
