import React from "react"
import classes from "./Edit.module.css"
import { ReactComponent as EditIcon } from "./edit.svg";

const Edit = ({width = 20, onClick}) => {

    return (
        <span className={classes.Edit} style={{width: width}} onClick={onClick}>
            <EditIcon/>
        </span>
    )
};

export default Edit;