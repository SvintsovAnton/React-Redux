import { createAppSlice } from "store/createAppSlice"
import { FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState = {
  countLike: 0,
  countDislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    addLike: create.reducer((state: FeedbackSliceState) => {
      state.countLike = state.countLike + 1
    }),
    addDislike: create.reducer((state: FeedbackSliceState) => {
      state.countDislike = state.countDislike + 1
    }),
    reset: create.reducer(create.reducer(() => feedbackInitialState)),
  }),
  selectors: {
    countLike: (state: FeedbackSliceState) => state.countLike,
    countDislike: (state: FeedbackSliceState) => state.countDislike,
  },
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors
