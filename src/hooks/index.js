import React, {useState} from 'react'

export const useToggler = (initialState) => {
  const [isToggled, setIsToggled] = useState(false)
  const handleClick = () => setIsToggled(!isToggled)
  return [isToggled, handleClick]
}