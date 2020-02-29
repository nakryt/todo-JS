import React, {createRef} from "react"
import classes from "./SearchPanel.module.css"
import Button from "../UI/Button";
import Input from "../UI/Input";
import {connect} from "react-redux";
import {changeFilter, changeFindText} from "../../redux/listReducer";

const SearchPanel = ({filter, changeFilter, findText, changeFindText}) => {
    const ref = createRef()
    return (
        <div className={classes.SearchPanel}>

            <Input
                ref={ref}
                placeholder='Поиск по записям'
                onChange={() => {changeFindText(ref.current.value)}}
                value={findText}
            />

            <Button
                type={filter === 'all' ? 'primary' : 'secondary'}
                onClick={() => { changeFilter('all') }}
            >
                Все
            </Button>
            <Button
                type={filter === 'liked' ? 'primary' : 'secondary'}
                onClick={() => { changeFilter('liked')}}
            >Понравились
            </Button>
            <Button
                type={filter === 'important' ? 'primary' : 'secondary'}
                onClick={() => { changeFilter('important')}}
            >Важные
            </Button>

        </div>
    )
};

const mapStateToProps = ({list: {filter, findText}}) => ({ filter, findText })

export default connect(mapStateToProps, { changeFilter, changeFindText })(SearchPanel);