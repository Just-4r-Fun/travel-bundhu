import { create } from 'zustand'

const useTravelStore = create((set) => ({
  user: {},
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}))

export default useTravelStore;