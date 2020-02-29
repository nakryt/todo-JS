import React from 'react';
import classes from './App.module.css';
import Container from "./components/Container";
import Header from "./components/Header";
import SearchPanel from "./components/SearchPanel";
import AddItem from "./components/List/AddItem";
import {connect} from "react-redux";
import List from "./components/List";
const App = ({likes, allItems}) => {
  return (
      <div className={classes.App}>
        <Container width='50%'>
            <Header likes={likes} allItems={allItems}/>
            <SearchPanel/>
            <List/>
            <AddItem/>
        </Container>
      </div>
  )
}

const mapStateToProps = ({list: { list }}) => {
    return {
        likes: list.filter(item => item.liked).length,
        allItems: list.length
    }
}

export default connect(mapStateToProps)(App);
