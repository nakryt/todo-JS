import React from "react"
import classes from "./Cancel.module.css"
import { ReactComponent as CancelIcon } from "./cross.svg";

const Cancel = ({width = 20, onClick}) => {

    return (
        <span className={classes.Cancel} onClick={onClick} style={{width: width}}>
            <CancelIcon/>
        </span>
    )
};

export default Cancel;