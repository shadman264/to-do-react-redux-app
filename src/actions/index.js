import * as actionTypes from './ActionTypes';

export const addToDo = (newToDo) => {
    const action = {
        type: actionTypes.ADD_TODO,
        newToDo: newToDo
    }
    return action;
}

export const doneToDo = (listItem) => {
    const action = {
        type: actionTypes.DONE_TODO,
        listItem: listItem
    }
    return action;
}

export const filterToDo = (filterType) => {
    const action = {
        type: actionTypes.FILTER_TODO,
        filterType: filterType
    }
    return action;
}
