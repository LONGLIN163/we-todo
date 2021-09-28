import React, { Component } from 'react';
import './css/style.css'
import store from './store'
import { CHANGE_INPUT , ADD , DEL, DA, CHECK } from './store/actionTypes'

/* const todoData=[
    {todo:'Get up early',checked:true},
    {todo:'Do some meditation',checked:true},
    {todo:'Eat a healthy breakfast',checked:false},
    {todo:'Drink plenty of water',checked:false},
    {todo:'Exercise',checked:false},
    {todo:'Smile :)',checked:false},
] */

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state=store.getState();
        console.log(this.state)
        this.changeInputValue= this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)

        this.handleChange = this.handleChange.bind(this);
    }

    storeChange(){
        this.setState(store.getState())
    } 

    changeInputValue(e){
        const action ={
            type:CHANGE_INPUT,
            value:e.target.value
        }
        store.dispatch(action)
    }

    handleEnterKey = (e) => {
        //console.log(e.nativeEvent.keyCode === 13)
        if(e.nativeEvent.keyCode === 13){
             this.add();
        }
    }

    add(){
        const action={
            type:ADD
        }
        store.dispatch(action)
    }

    
    del(index){
        const action={
            type:DEL,
            index
        }
        store.dispatch(action)
    }

    check(index){
        const action={
            type:CHECK,
            index
        }
        store.dispatch(action)
    }

    delAll(){
        const action={
            type:DA,
        }
        store.dispatch(action)
    }

    handleChange(index,e) {
        //console.log(e.target.value);
        //console.log(index);
        this.check(index)
    }

    render() { 
        return ( 
            
            <main>
              {/* <h1>WEVENTURE Coding Challenge</h1> */}
              <h2>Type something, then enter to put it on the list</h2>
              <input 
                type="text" 
                // placeholder={this.state.inputValue}
                value={this.state.inputValue}
                onChange={this.changeInputValue}
                onKeyPress={this.handleEnterKey}
              />

              <h2>click item to check the item</h2>
            
              <ul>
                {
                    this.state.list.map( (item,index) => {
                        return <li 
                                  key={item+index} 
                                  className={item.checked==true?'done':''}
                                >
                                <input 
                                    type="checkbox" 
                                    name="check" 
                                    className="checkitems" 
                                    checked={item.checked}
                                    onChange={this.handleChange.bind(this,index)}
                                />
                                <span>{item.todo}</span>

                            <button onClick={this.del.bind(this,index)}>Del</button>
                        </li>
                    })
                }
              </ul>
            
              <button className="clearAll" onClick={this.delAll}>Clear all</button>
            </main>
            
         );
    }
}
export default TodoList;