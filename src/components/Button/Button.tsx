import { ButtonComponent } from "./styles"

import { ButtonProps } from "./types"

function Button({
  isRed = false,
  disabled = false,
  name,
  type = "button",
  onClick = () => {},
  imgSrc,
}: ButtonProps) {
  return (
    <ButtonComponent
      isRed={isRed}
      className="button-component"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {name}
      <img src={imgSrc} />
    </ButtonComponent>
  )
}

export default Button
