import React from 'react';
import {connect} from 'react-redux';
import {ListGroup, ListGroupItem, Row, Col, Button} from 'reactstrap';
import {doneToDo} from '../actions';
import { bindActionCreators } from 'redux';


class ToDoList extends React.Component{
    doneButtClick(listItem){
        // console.log(listItem);
        // console.log(this.props);
        this.props.dispatch(doneToDo(listItem));
    }
    render(){
        let listItems = null;
        // console.log("FROM ToDoList 2");
        // console.log(this.props);
        if(this.props.toDoList){
            let that = this;
            listItems = this.props.toDoList.map((item)=>{
                // console.log("h2ere");
                // console.log(that.props.filter);
                if(that.props.filter!=undefined){
                    if(that.props.filter==='true' && item.show==false)
                        return;
                    else if(that.props.filter==='false' && item.show==true)
                        return;
                }

                if(item.show){
                    return (
                        <ListGroupItem key={item.id} style={{marginTop:'0.2%', marginBottom:'0.2%'}}>
                            <Row>
                            <Col sm={11}>
                                {item.value}
                            </Col>
                            <Col sm={1}>
                                <Button outline color="success" onClick={that.doneButtClick.bind(that, item)}>Done</Button>
                            </Col>
                            </Row>
                        </ListGroupItem>
                    )
                }
                else{
                    return (
                        <ListGroupItem disabled key={item.id} style={{marginTop:'0.2%', marginBottom:'0.2%'}}>
                            <Row>
                            <Col sm={11}>
                                {item.value}
                            </Col>
                            <Col sm={1}>
                                <Button disabled outline color="success" onClick={that.doneButtClick.bind(that, item)}>Done</Button>
                            </Col>
                            </Row>
                        </ListGroupItem>
                    )
                }

            });
        }
        return(
            <ListGroup>
                {listItems}
            </ListGroup>
        )
    }
}

function mapStateToProps(state){
    // console.log("FROM ToDoList");
    // console.log(state.newState);
    return({
        toDoList: state.newState.toDoList,
        filter: state.newState.filter
    })
}

function mapDispatchToProps(dispatch){
    let actions = bindActionCreators(doneToDo);
    return { ...actions, dispatch };

}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
