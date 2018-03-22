import * as actionTypes from '../actions/ActionTypes';
const ToDoReducer = (state={ toDoList: []}, action) => {
    let newState;
    let newToDoList = JSON.parse(JSON.stringify(state.toDoList));
    switch(action.type){
        case actionTypes.ADD_TODO:
            // console.log("FROM REDUCER");
            // console.log(state);

            newToDoList.push(action.newToDo);
            newState = {toDoList: newToDoList};
            // console.log(newState);
            return newState;
        case actionTypes.DONE_TODO:
            // console.log('from done todo');
            // console.log(action.listItem);
            newToDoList.map((item) => {
                if(item.id==action.listItem.id){
                    item.show = false;
                }
            });
            newState = {toDoList: newToDoList};
            return newState;
        case actionTypes.FILTER_TODO:
            // console.log('from filter to do');
            // console.log(action);
            if(action.filterType==='All'){
                newState = {toDoList: newToDoList, filter: 'all'};
            }
            else if(action.filterType==='Active'){
                newState = {toDoList: newToDoList, filter: 'true'};
            }
            else if(action.filterType==='Completed'){
                newState = {toDoList: newToDoList, filter: 'false'};
            }

            // console.log(newState);
            return newState;
        default:
            return state;
    }
}

export default ToDoReducer;
