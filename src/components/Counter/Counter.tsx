import Button from "components/Button/Button"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import { CounterWrapper, ButtonControl, Count } from "./styles"

function Counter() {
  //  const [counterNumber, setCounterNumber] = useState<number>(0)

  //  const onPlusinApp = () => {
  //    setCounterNumber(prevValue => Number((prevValue + 1).toFixed(2)))
  //  }

  //  const onMinusinApp = () => {
  //    setCounterNumber(prevValue => Number((prevValue - 2).toFixed(2)))
  //  }

  //  const onMultiplyinApp = () => {
  //    setCounterNumber(prevValue => Number((prevValue * 2).toFixed(2)))
  //  }
  //  const onDivideinApp = () => {
  //   setCounterNumber(prevValue => Number((prevValue / 2).toFixed(2)))
  //  }

  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)
  const onPlus = () => {
    counterSliceActions.add()
  }
  const onMinus = () => {
    counterSliceActions.minus()
  }
  const onMultiply = () => {
    counterSliceActions.multiply()
  }
  const onDivide = () => {
    counterSliceActions.divide()
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="Multiply" onClick={onMultiply} />
      </ButtonControl>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Divide" onClick={onDivide} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
