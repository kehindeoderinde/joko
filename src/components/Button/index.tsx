import React from 'react'
import Arrow from 'assets/images/Arrow.svg'
import './Button.scss'

interface ButtonProps{
    placeholder: string
}

const Button : React.FC<ButtonProps> = ({placeholder})=> (
    <a href="" className="button">
        <span>{placeholder}</span>
        <img src={Arrow}  alt="Arrow" className="button_arrow" />
    </a>
)

export default Button;