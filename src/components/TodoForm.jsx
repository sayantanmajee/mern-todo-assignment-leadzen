import React from 'react'
import { useState } from 'react'
import './TodoForm.css'

import { addNewTodo } from '../redux/actions'
import {useDispatch} from 'react-redux'


function TodoForm() {
  const [text, setTest] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    //dispatch the todo to global store
    dispatch(addNewTodo(text));

    setTest("")
  }

  const onInputChange = (e) => {

    setTest(e.target.value);
    
  }


  return (
    <div>
        <form action="submit" className='todo-form' onSubmit={onFormSubmit}>
            <input
            placeholder='Enter New Todo...'
            className='input'
            onChange={onInputChange}
            value={text}
            />
            <button className={text === '' ? 'add-button disable-button' : 'add-button'}>ADD</button>
        </form>
    </div>
  )
}

export default TodoForm