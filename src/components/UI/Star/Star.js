import React from "react"
import classes from "./Star.module.css"
import {ReactComponent as StarIcon} from "./star.svg";

const Star = ({width = 20, important, onClick}) => {
    const cls = [
        classes.Star,
        important ? classes.StarActive : null
    ]
    return (
        <span className={cls.join(' ')} style={{ width: width }} onClick={onClick}>
            <StarIcon/>
        </span>
    )
};

export default Star;