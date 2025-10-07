import React from "react";

function Todo({ task, onDelete, onMoveUp, onMoveDown, index }) {
    return (
        <li>
            <span className="task text">{task}</span>
            <button
                className="delete-button"
                onClick={() => onDelete(index)}>
                delete
            </button>
            <button
                className="move-button"
                onClick={() => onMoveUp(index)}>
                move up
            </button>
            <button
                className="move-button"
                onClick={() => onMoveDown(index)}>
                move down
            </button>
        </li>
    );
}

export default Todo;