const defaultState = {
    inputValue : 'Write Something',
    list:[
        {todo:'something 1',checked:true},
        {todo:'something 2',checked:false},
    ]
}

export default (state = defaultState,action)=>{
    //console.log(state)
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.inputValue = action.value
        return newState
    }
    if (action.type==="add") {
        let newState=JSON.parse(JSON.stringify(state))
        console.log("add---newState---",newState)
        const newTodo={
            todo:newState.inputValue,
            status:''
        };
        console.log('add---newTodo---',newTodo)
        newState.list.push(newTodo);
        newState.inputValue="";
        console.log('add---newTodo---',newState)
        return newState;
    }
    return state
}