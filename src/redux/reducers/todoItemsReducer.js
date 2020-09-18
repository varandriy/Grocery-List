import {SET_ITEMS } from '../actions/toDoListActions'

const initialState = []



export const todoItemsReducer = (state = initialState, action) => {
    switch (action.type) {   
        case SET_ITEMS:
            return action.payload;
    }
    return state;
};


