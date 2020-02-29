import React from "react"
import classes from "./Header.module.css"

const Header = ({likes, allItems}) => {
    const formatString = num => {
        if ((num === 1 || num % 10 === 1) && num !== 11 ) {
            return `ь`
        } else if (num % 10 > 1 && num % 10 < 5) {
            return `и`
        }
        return `ей`
    }
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderName}>Владимир Пестов</div>
            <div>
                <div>Понравилось: {likes} запис{formatString(likes)} из {allItems}</div>
            </div>
        </div>
    )
};

export default Header;