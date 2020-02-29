import changeProps from "./changeProps";

const ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    EDIT_ITEM = 'EDIT_ITEM',
    LIKED_ITEM = 'LIKED_ITEM',
    IMPORTANT_ITEM = 'IMPORTANT_ITEM',
    CHANGE_NEW_LIST_ITEM = 'CHANGE_NEW_LIST_ITEM',
    EDIT_ITEM_CHANGE_VALUE = 'EDIT_ITEM_CHANGE_VALUE',
    ADD_EDIT_ITEM_VALUE = 'ADD_EDIT_ITEM_VALUE',
    CANCEL_EDIT_ITEM = 'CANCEL_EDIT_ITEM',
    CHANGE_FILTER = 'CHANGE_FILTER',
    CHANGE_FIND_TEXT = 'CHANGE_FIND_TEXT'

const initializeState = {
    newItemText: '',
    list: [
        {id: 1, text: 'I learn ReactJS', liked: true, important: false, edit: false, editValue: ''},
        {id: 2, text: 'I have 4 days to deadline', liked: false, important: true, edit: false, editValue: ''},
        {id: 3, text: 'Today is a very wonderful day...', liked: false, important: false, edit: false, editValue: ''},
        {id: 4, text: 'Happy new year...', liked: false, important: false, edit: false, editValue: ''},
        {id: 5, text: 'I need to break...', liked: false, important: false, edit: false, editValue: ''},
        {id: 6, text: 'I learn ReactJS', liked: true, important: false, edit: false, editValue: ''},
    ],
    filter: 'all',
    findText: ''
}

const listReducer = (state = initializeState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            if (!state.newItemText.length) {
                return state
            }
            const newItem = {
                id: state.list[state.list.length - 1].id + 1,
                text: state.newItemText,
                liked: false,
                important: false,
                edit: false
            }
            return {
                ...state,
                list: [...state.list, newItem],
                newItemText: ''
            }
        }
        case LIKED_ITEM: {
            return {
                ...state,
                list: changeProps(state.list, 'liked', action.id)
            }
        }
        case IMPORTANT_ITEM: {
            return {
                ...state,
                list: changeProps(state.list, 'important', action.id)
            }
        }
        case DELETE_ITEM: {
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.id)
            }
        }
        case CHANGE_NEW_LIST_ITEM: {
            return {
                ...state,
                newItemText: action.text
            }
        }
        case EDIT_ITEM: {
            const newList = state.list.map(item => {
                if (item.id === action.id) {
                    return changeProps(changeProps(item, 'edit'), 'editValue', item.id, item.text)
                }
                return item
            })
            return {
                ...state,
                list: newList
            }
        }
        case EDIT_ITEM_CHANGE_VALUE: {
            return {
                ...state,
                list: changeProps(state.list, 'editValue', action.id, action.text)
            }
        }
        case ADD_EDIT_ITEM_VALUE: {
            const newValue = state.list.find(item => item.id === action.id)['editValue']
            const newList = changeProps(state.list, 'text', action.id, newValue)

            return {
                ...state,
                list: changeProps(newList, 'edit', action.id)
            }
        }
        case CANCEL_EDIT_ITEM: {
            return {
                ...state,
                list: changeProps(state.list, 'edit', action.id)
            }
        }
        case CHANGE_FILTER: {
            return {
                ...state,
                filter: action.filter
            }
        }
        case CHANGE_FIND_TEXT: {
            return {
                ...state,
                findText: action.text
            }
        }


        default:
            return state

    }
}

export const addNewListItem = () => ({ type: ADD_ITEM })
export const likedListItem = (id) => ({ type: LIKED_ITEM, id })
export const importantListItem = (id) => ({ type: IMPORTANT_ITEM, id })
export const deleteListItem = (id) => ({ type: DELETE_ITEM, id })
export const changeNewListItem = (text) => ({ type: CHANGE_NEW_LIST_ITEM, text })
export const editItem = (id) => ({ type: EDIT_ITEM, id })
export const editItemValue = (id, text) => ({ type: EDIT_ITEM_CHANGE_VALUE, id, text })
export const addEditItemValue = (id) => ({ type: ADD_EDIT_ITEM_VALUE, id })
export const cancelEditItem = (id) => ({ type: CANCEL_EDIT_ITEM, id })
export const changeFilter = (filter) => ({ type: CHANGE_FILTER, filter })
export const changeFindText = (text) => ({ type: CHANGE_FIND_TEXT, text })

export default listReducer;