import React from "react"
import classes from "./List.module.css"
import ListItem from "./ListItem";
const List = ({list, importantListItem, likedListItem, deleteListItem, editItem}) => {

    return (
        <ul className={classes.List}>
            {
                list.map(({id, text, liked, important, edit, editValue}) => {
                    return (
                        <ListItem
                            key={id}
                            id={id}
                            edit={edit}
                            text={text}
                            liked={liked}
                            important={important}
                            importantListItem={() => {importantListItem(id)}}
                            likedListItem={() => {likedListItem(id)}}
                            deleteListItem={() => {deleteListItem(id)}}
                            editItem={() => {editItem(id)}}
                            editValue={editValue}
                        />
                    )
                })}
        </ul>
    )
};


export default List;