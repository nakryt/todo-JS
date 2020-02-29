import React from "react"
import classes from "./Like.module.css"
import {ReactComponent as Heart} from './like.svg'

const Like = ({width = 20, height = 'auto', onClick, liked}) => {
    const cls = [
        classes.Like,
        liked ? classes.LikeActive : null
    ]
    return (
        <span
            className={cls.join(' ')}
            style={{width, height}}
            onClick={onClick}
        >
            <Heart />
        </span>
    )
};

export default Like;