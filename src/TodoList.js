import React, { Component } from 'react';
import './css/style.css'
import store from './store'
import { changeInputAction , addAction , checkAction, delAction, delAllAction } from './store/actionCreators'

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
        console.log("***Hello! Please ignore the waring: A component is changing an uncontrolled......for this task if you see it.***")
        super(props)
        this.state=store.getState();
        this.changeInputValue= this.changeInputValue.bind(this)
        this.handleChange = this.handleChange.bind(this);

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)

    }

    storeChange(){
        this.setState(store.getState())
    } 

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    handleEnterKey = (e) => {
        if(e.nativeEvent.keyCode === 13){
             this.add();
        }
    }

    add(){
        const action=addAction();
        store.dispatch(action)
    }

    
    del(index){
        const action=delAction(index)
        store.dispatch(action)
    }

    check(index){
        const action=checkAction(index)
        store.dispatch(action)
    }

    delAll(){
        const action=delAllAction()
        store.dispatch(action)
    }

    handleChange(index,e) {
        this.check(index)
    }

    render() { 
        return ( 
            
            <main>
              <h2>Type something, then click 'enter'</h2>
              <input 
                type="text" 
                value={this.state.inputValue}
                onChange={this.changeInputValue}
                onKeyPress={this.handleEnterKey}
              />   

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