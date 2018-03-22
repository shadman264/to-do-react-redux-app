import React from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import AddToDo from '../containers/AddToDo';
import ToDoList from '../containers/ToDoList';
import ShowToDoList from '../containers/ShowToDoList';
// app component
export default class App extends React.Component {
    // render
    render() {
        return (
            <div className="container" style={{margin: '1.5%', padding:'1.5%'}}>
            <Card body>
                <CardBody>
                    <CardTitle className="text-center">ToDo App</CardTitle>
                    <AddToDo/>
                    <CardSubtitle style={{paddingBottom: '1%', paddingTop: '1.5%'}}>List of ToDo:</CardSubtitle>
                    <ToDoList/>
                    <ShowToDoList/>
                </CardBody>
            </Card>
            </div>
        );
    }
}
