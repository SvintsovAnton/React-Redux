import Button from "components/Button/Button"
import { Like, Dislike } from "assets"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { FeedbackWrapper, Count, Image, ImageContainer } from "./styles"
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
      <ImageContainer>
        <Image src={Like} alt="like" onClick={plusDislike} />
      </ImageContainer>
      <Count>{like}</Count>
      <ImageContainer>
        <Image src={Dislike} alt="dislike" onClick={plusDislike} />
      </ImageContainer>
      <Count>{dislike}</Count>
      <Button name="Reset Results" onClick={resetResult} />
    </FeedbackWrapper>
  )
}

export default Feedback
