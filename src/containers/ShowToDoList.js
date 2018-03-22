import React from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, Label, CardSubtitle} from 'reactstrap';
import {filterToDo} from '../actions';

class ShowToDoList extends React.Component{
    filterButtClick(filterType){
        this.props.dispatch(filterToDo(filterType));
    }
    render(){
        return(
            <div style={{paddingTop: '1.5%'}}>
                <hr/>
                <CardSubtitle style={{}}>Show</CardSubtitle>
                <Button color="link" onClick={this.filterButtClick.bind(this, 'All')}>All</Button>{' '}
                <Button color="link" onClick={this.filterButtClick.bind(this, 'Active')}>Active</Button>{' '}
                <Button color="link" onClick={this.filterButtClick.bind(this, 'Completed')}>Completed</Button>{' '}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    let actions = bindActionCreators(filterToDo);
    return ({
        ...actions, dispatch
    })
}

export default connect()(ShowToDoList)
