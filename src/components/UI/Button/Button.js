import React from "react"
import classes from "./Button.module.css"

const Button = (props) => {
    const {type = 'primary', onClick, submit = true} = props
    const cls = [classes.Button]
    if (type === 'secondary') {
        cls.push(classes.ButtonSecondary)
    }
    return (
        <button type={submit ? "submit" : "button"}
            className={cls.join(' ')}
            onClick={onClick}
        >
            { props.children }
        </button>
    )
};

export default Button;
