import React, {createRef} from "react"
import classes from "./EditItem.module.css"
import Input from "../../UI/Input";
import Check from "../../UI/Check";
import {connect} from "react-redux";
import {addEditItemValue, cancelEditItem, editItemValue} from "../../../redux/listReducer";
import Cancel from "../../UI/Cancel";

const EditItem = ({value, id, editItemValue, addEditItemValue, cancelEditItem}) => {
    const ref = createRef()
    return (
        <span className={classes.EditItem}>
            <Input ref={ref} value={value} style={{padding: '5px 80px 5px 7px', marginTop: 0}}
                   onChange={() => {editItemValue(id, ref.current.value)}}/>
            <Check
                onClick={() => {addEditItemValue(id)}}
            />
            <Cancel onClick={() => {cancelEditItem(id)}}/>
        </span>
    )
};



export default connect((state) => {return {val: state}},{editItemValue, addEditItemValue, cancelEditItem})(EditItem);