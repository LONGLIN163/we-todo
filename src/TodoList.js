import React, { Component } from 'react';
import './css/style.css'
import store from './store'

const todoData=[
    {todo:'Get up early',checked:true},
    {todo:'Do some meditation',checked:true},
    {todo:'Eat a healthy breakfast',checked:false},
    {todo:'Drink plenty of water',checked:false},
    {todo:'Exercise',checked:false},
    {todo:'Smile :)',checked:false},
]

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state=store.getState();
        //console.log(this.state)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        
        this.changeInputValue= this.changeInputValue.bind(this)
    }

    storeChange(){
        this.setState(store.getState())
    } 

    changeInputValue(e){
        const action ={
            type:'changeInput',
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
            type:"add"
        }
        store.dispatch(action)
    }

    render() { 
        return ( 
            
            <main>
              <h2>Type something, and enter</h2>
              <input 
                type="text" 
                placeholder="Type something, then enter to put it on the list"
                onChange={this.changeInputValue}
                onKeyPress={this.handleEnterKey}
              />

              <h2>Click item to check the item</h2>
            
              <ul>
                {
                     this.state.list.map( (item,index) => {
                        return <li 
                                  key={item+index} 
                                  className={item.checked==true?'done':''}
                                >
                            <span>{item.todo}</span>
                            <button>Del</button>
                        </li>
                    })
                }
              </ul>
            
              <button className="clearAll">Clear all</button>
            </main>
            
         );
    }
}
export default TodoList;