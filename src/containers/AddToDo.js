import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToDo} from '../actions';
import uuidv1 from 'uuid/v1';

class AddToDo extends React.Component{

    addButtClick(e){
        e.preventDefault();
        let newToDo = {
            id: uuidv1(),
            value: document.getElementById('newToDo').value,
            show: true
        }
        this.props.dispatch(addToDo(newToDo));
    }
    render(){
        return(
            <Form>
                <FormGroup row>
                    <Label for="addToDo" sm={2}>Add ToDo</Label>
                    <Col sm={9}>
                        <Input type="text" name="newToDo" id="newToDo" placeholder="Type new ToDo"/>
                    </Col>
                    <Col sm={1}>
                        <Button color='success' onClick={this.addButtClick.bind(this)}>Add</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return({
        actions: bindActionCreators(addToDo, dispatch)
    })
}

export default connect(mapDispatchToProps)(AddToDo);
