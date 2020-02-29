import React from "react"
import classes from "./Input.module.css"

const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && shouldValidate && touched
}

const Input = React.forwardRef((props, ref) => {
    const {type = 'text', label, value, required, placeholder, errorMessage, onChange, style, ...rest } = props
    const cls = [classes.Input]
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label>
                {label}
                { type === 'textarea' ?
                    <textarea
                        ref={ref}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        required={required}
                        style={style}
                        {...rest}
                    />
                    :
                    <input
                        style={style}
                        ref={ref}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        required={required}
                        {...rest}
                    />
                }
            </label>
            {isInvalid(props) ? <span>{errorMessage || 'Введите верное значение'}</span> : null}
        </div>
    )
});

export default Input;
