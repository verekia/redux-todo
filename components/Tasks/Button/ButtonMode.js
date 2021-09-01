import React from 'react'
import buttonModeStyles from './../../../styles/ButtonMode.module.css'

const ButtonMode = ({ mode, content, handleChangeMode }) => {
  return (
    <button
      id={content}
      onClick={handleChangeMode}
      className={`${buttonModeStyles.normal} ${mode === content ? buttonModeStyles.active : ''} `}
    >
      {content}
    </button>
  )
}

export default ButtonMode
