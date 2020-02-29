import React from "react"
import classes from "./Trash.module.css"
import { ReactComponent as TrashIcon } from "./trash.svg";

const Trash = ({ width = 20, onClick }) => {

    return (
        <span className={classes.Trash} style={{ width: width }} onClick={onClick}>
            <TrashIcon/>
        </span>
    )
};

export default Trash;