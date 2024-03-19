import { useState } from "react"
import Counter from "../components/Counter/Counter"

function Homework29() {
  const [counterNumber, setCounterNumber] = useState<number>(0)

  const onPlusinApp = () => {
    setCounterNumber(prevValue => prevValue + 1)
  }

  const onMinusinApp = () => {
    setCounterNumber(prevValue => prevValue - 1)
  }

  return (
    <>
      <Counter
        count={counterNumber}
        onPlus={onPlusinApp}
        onMinus={onMinusinApp}
      />
    </>
  )
}

export default Homework29
