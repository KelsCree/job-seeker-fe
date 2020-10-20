import React, {useState} from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

export const useToggler = (initialState) => {
  const [isToggled, setIsToggled] = useState(false)
  const handleClick = () => setIsToggled(!isToggled)
  return [isToggled, handleClick]
}

