import React from "react"
import {connect} from "react-redux";
import {deleteListItem, editItem, importantListItem, likedListItem} from "../../redux/listReducer";
import List from "./List";


const ListContainer = ({list, filter, findText, importantListItem, likedListItem, deleteListItem, editItem}) => {
    if (filter === 'liked') {
        list = list.filter(item => item.liked)
    } else if (filter === 'important') {
        list = list.filter(item => item.important)
    }
    if (findText.trim().toLowerCase().length) {
        list = list.filter(item => item.text.toLowerCase().indexOf(findText.trim()) > -1)
    }

    return (
        <List
            list={list}
            importantListItem={importantListItem}
            likedListItem={likedListItem}
            deleteListItem={deleteListItem}
            editItem={editItem}
        />
    )
};

const mapStateToProps = ({list: {list, filter, findText}}) => ({ list, filter, findText })
const mapDispatchToProps = {
    likedListItem,
    importantListItem,
    deleteListItem,
    editItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);