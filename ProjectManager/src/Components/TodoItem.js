/**
 * Created by Mykolaj Krusser on 03/05/2018.
 */
import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

export default TodoItem;