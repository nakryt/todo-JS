import React from "react"
import classes from "./ListItem.module.css"
import Like from "../../UI/Like";
import Star from "../../UI/Star";
import Trash from "../../UI/Trash";
import Edit from "../../UI/Edit";
import EditItem from "../EditItem";

const ListItem = (props) => {
    const {
        id, text, edit, liked, important,
        importantListItem, likedListItem,
        deleteListItem, editItem, editValue
    } = props
    const cls = [
        classes.ListItem,
        important ? classes.ListItemImportant : null
    ]
    return (
        <li className={cls.join(' ')}>
            {
                edit ?
                    <div className={classes.ListItemEdit}>
                        <EditItem value={editValue} id={id}/>
                    </div> :
                    <div>{text}</div>
            }

            <div className={classes.ListItemOptions}>
                <Edit onClick={editItem}/>
                <Like liked={liked} onClick={likedListItem}/>
                <Star important={important} onClick={importantListItem}/>
                <Trash onClick={deleteListItem}/>
            </div>
        </li>
    )
};

export default ListItem;