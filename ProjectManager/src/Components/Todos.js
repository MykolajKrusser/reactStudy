/**
 * Created by Mykolaj Krusser on 03/05/2018.
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return(
                    <TodoItem key={todo.title} todo={todo} />
                );
            });
        }
        return (
            <div className="Todos">
                <h3>To Do list</h3>
                {todoItems}
            </div>
        );
    }
}

export default Todos;