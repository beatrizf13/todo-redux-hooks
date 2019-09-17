import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from './styles';

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todo.data);

  const [newTodo, setNewTodo] = useState('');

  function addTodo(title) {
    dispatch({ type: 'ADD_TODO', payload: { title } });
    setNewTodo('');
  }

  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  }

  return (
    <Container>
      <h1>Todo List</h1>

      <header>
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="button" onClick={() => addTodo(newTodo)}>
          Add
        </button>
      </header>

      <ul>
        {todos.map(({ id, title, done }) => (
          <li key={id}>
            <span>
              <button
                type="button"
                onClick={() => toggleTodo(id)}
                style={{
                  textDecoration: done ? 'line-through' : 'none',
                }}
              >
                {done ? '👌' : '👋'} {title}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
