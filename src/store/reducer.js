import { CHANGE_INPUT , ADD , DEL, DA, CHECK } from './actionTypes'

const defaultState = {
    inputValue : 'Write Something here!!!',
    list:[
        {todo:'something 1',checked:true},
        {todo:'something 2',checked:false},
    ]
}

export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.inputValue = action.value
        return newState
    }
    if (action.type===ADD) {
        let newState=JSON.parse(JSON.stringify(state))
        const newTodo={
            todo:newState.inputValue,
            status:''
        };
        newState.list.push(newTodo);
        newState.inputValue="";
        return newState;
    }

    if (action.type===DEL) {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        return newState;
    }

    if (action.type===DA) {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=[];
        newState.inputValue="";
        return newState;
    }

    if (action.type===CHECK) {
        let newState=JSON.parse(JSON.stringify(state))
        newState.list[action.index].checked=!newState.list[action.index].checked;

        return newState;
    }

    return state
}