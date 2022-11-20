import React, { useState } from 'react'
import { BsTrash, BsVectorPen } from 'react-icons/bs'
import { toggleTodoDone, updateTodo, deleteTodo } from '../redux/actions';
import './TodoItems.css';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';


export default function TodoItems({ data, id, done }) {

    const dispatch = useDispatch();

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(data);

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(id, text))
    }

    return (
        <li
            className='todo-item'
        >
            <span
                className='data'
                onClick={() => dispatch(toggleTodoDone(id))}
                style={{
                    textDecoration: done ? 'line-through' : '',
                    color: done ? 'wheat' : '',
                    display: editing ? 'none' : ''
                }}
            >{data}</span>

            <form
                action="submit"
                className='edit-todo'
                style={{
                    display: !editing ? 'none' : ''
                }}
                onSubmit={ onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
            <div className='icon'>
                <span onClick={() => setEditing(!editing)}><BsVectorPen /></span>
                <span onClick={() => dispatch(deleteTodo(id))}><BsTrash /></span>
            </div>

        </li>
    )
}
