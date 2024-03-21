import Button from "../Button/Button"
import { useState } from "react"

import { CounterWrapper, ButtonControl, Count } from "./styles"

function Counter() {
  const [counterNumber, setCounterNumber] = useState<number>(0)

  const onPlusinApp = () => {
    setCounterNumber(
      (counterNumber + 1).toString().indexOf(".") !== -1
        ? prevValue => parseFloat((prevValue + 1).toFixed(2))
        : prevValue => prevValue + 1,
    )
  }

  const onMinusinApp = () => {
    setCounterNumber(
      (counterNumber - 1).toString().indexOf(".") !== -1
        ? prevValue => parseFloat((prevValue - 1).toFixed(2))
        : prevValue => prevValue - 1,
    )
  }

  const onMultiplyinApp = () => {
    setCounterNumber(
      (counterNumber * 2).toString().indexOf(".") !== -1
        ? prevValue => parseFloat((prevValue * 2).toFixed(2))
        : prevValue => prevValue * 2,
    )
  }
  const onDivideinApp = () => {
    setCounterNumber(
      (counterNumber / 2).toString().indexOf(".") !== -1
        ? prevValue => parseFloat((prevValue / 2).toFixed(2))
        : prevValue => prevValue / 2,
    )
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="Multiply" onClick={onMultiplyinApp} />
      </ButtonControl>
      <ButtonControl>
        <Button name="+" onClick={onPlusinApp} />
      </ButtonControl>
      <Count>{counterNumber}</Count>
      <ButtonControl>
        <Button name="-" onClick={onMinusinApp} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Divide" onClick={onDivideinApp} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
