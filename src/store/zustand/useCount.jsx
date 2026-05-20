import { create } from 'zustand';

// We Pass in a callback function that set method 'set'
export const useCount = create((set) => ({
  // Define State + Initial Value
  count: 0,

  // The Actions: functions describe how to change state
  reset: () => set({ count: 0 }),

  increment: () => set((prev) => ({ count: prev.count + 1 })),

  decrement: () => set((prev) => ({ count: prev.count - 1 })),

  incrementByTen: () => set((prev) => ({ count: prev.count + 10 })),

  incrementByValue: (value) => set((prev) => ({ count: prev.count + value })),
}));
