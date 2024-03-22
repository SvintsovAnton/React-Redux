import Button from "components/Button/Button"
import { Like, Dislike } from "assets"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { FeedbackWrapper, ButtonControl, LikeDislike } from "./styles"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

function Feedback() {
  const dispatch = useAppDispatch()
  const like: number = useAppSelector(feedbackSliceSelectors.countLike)
  const dislike = useAppSelector(feedbackSliceSelectors.countDislike)

  const plusLike = () => {
    dispatch(feedbackSliceActions.addLike())
  }

  const plusDislike = () => {
    dispatch(feedbackSliceActions.addDislike())
  }

  const resetResult = () => {
    dispatch(feedbackSliceActions.reset())
  }

  return (
    <FeedbackWrapper>
      <ButtonControl>
        <Button imgSrc={Like} onClick={plusLike} />
      </ButtonControl>
      <LikeDislike>{like}</LikeDislike>
      <ButtonControl>
        <Button imgSrc={Dislike} onClick={plusDislike} />
      </ButtonControl>
      <LikeDislike>{dislike}</LikeDislike>
      <ButtonControl>
        <Button name="Reset Results" onClick={resetResult} />
      </ButtonControl>
    </FeedbackWrapper>
  )
}

export default Feedback
