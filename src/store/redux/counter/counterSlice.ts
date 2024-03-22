import { createAppSlice } from "store/createAppSlice"

interface CounterSliceState {
  count: number
}

const counterInitialState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  name: "Counter",
  initialState: counterInitialState,
  reducers: create => ({
    add: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer((state: CounterSliceState) => {
      state.count = state.count * 2
    }),
    divide: create.reducer((state: CounterSliceState) => {
      state.count = Number((state.count / 2).toFixed)
    }),
  }),
  selectors: {
    count: state => state.count,
  },
})

export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors
