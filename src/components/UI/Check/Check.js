import React from "react"
import classes from "./Check.module.css"
import { ReactComponent as CheckIcon } from "./check-mark.svg";

const Check = ({ width = 20, onClick}) => {

    return (
        <span className={classes.Check} style={{ width: width }} onClick={onClick}>
            <CheckIcon/>
        </span>
    )
};

export default Check;