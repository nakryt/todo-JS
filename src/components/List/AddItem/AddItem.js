import React, {createRef} from "react"
import classes from "./AddItem.module.css"
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import {connect} from "react-redux";
import {addNewListItem, changeNewListItem} from "../../../redux/listReducer";

const AddItem = ({ newListItemValue, changeNewListItem, addNewListItem }) => {
    const ref = createRef();
    return (
        <div className={classes.AddItem}>
            <Input
                ref={ref}
                value={newListItemValue}
                onChange={() => {changeNewListItem(ref.current.value)}}
                placeholder='О чем вы сейчас думаете..?'
                onKeyPress={(e) => {
                        if (e.charCode === 13) {
                            addNewListItem()
                        }
                    }
                }
            />

            <Button
                onClick={addNewListItem}
            >Добавить</Button>
        </div>
    )
};

const mapStateToProps = ({list: {newItemText}}) => ({newListItemValue: newItemText})

export default connect(mapStateToProps, { changeNewListItem, addNewListItem })(AddItem);
