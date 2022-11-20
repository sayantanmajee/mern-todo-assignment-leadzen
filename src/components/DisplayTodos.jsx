import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import { getAllTodos } from '../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import TodoItems from './TodoItems'
import Tabs from './Tabs'
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../redux/actions/type'

import './DisplayTodos.css'

export default function DisplayTodos() {

  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(false)

  const allTodos = useSelector(state => state.todos)
  const currentTab = useSelector( state => state.currentTab);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return allTodos;
    } else if ( currentTab === ACTIVE_TODOS) {
      return allTodos.filter(todo => !todo.done)
    } else if ( currentTab === DONE_TODOS) {
      return allTodos.filter(todo => todo.done)
    }
    
  }

  useEffect(() => {
    dispatch(getAllTodos());
  }, [])



  return (
    <article className='todo-wrapper'>
      <div className='tabs'>
        <Tabs currentTab={currentTab}/>
      </div>
      <ul>
        {
          getTodos().map((item) => (
            <TodoItems
              key={item._id}
              data={item.data}
              id={item._id}
              done= {item.done}
              />
          ))
        }
      </ul>

    </article>
  )
}
