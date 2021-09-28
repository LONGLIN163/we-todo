import React, { Component } from 'react';
import './css/style.css'

const todoData=[
    {todo:'Get up early',checked:true},
    {todo:'Do some meditation',checked:true},
    {todo:'Eat a healthy breakfast',checked:false},
    {todo:'Drink plenty of water',checked:false},
    {todo:'Exercise',checked:false},
    {todo:'Smile :)',checked:false},
]

class TodoList extends Component {

    render() { 
        return ( 
            
            <main>
              <h2>Type something, and enter</h2>
              <input 
                type="text" 
                placeholder="Type something, then enter to put it on the list"
              />

              <h2>Click item to check the item</h2>
            
              <ul>
                {
                    todoData.map( (item,index) => {
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