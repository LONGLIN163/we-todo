import { CHANGE_INPUT , ADD , DEL, DA, CHECK } from './actionTypes'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const addAction=()=>({
    type:ADD
})

export const checkAction=(index)=>({
    type:CHECK,
    index
})

export const delAction=(index)=>({
    type:DEL,
    index
})

export const delAllAction=()=>({
    type:DA,
})