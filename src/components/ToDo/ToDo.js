/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import NavigationBar from '../Navbar/NavigationBar.js';
import '../../index.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' };

const ToDo = () => {
  const [TodoFormState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);
  //Array takes in dependencies (re-runs useEffect ONLY when those change)
  //Dependencies should be state objects. useEffect typically runs on:
  //1. prop change 2. state change 2. parent state change

  function setInput(key, value) {
    setFormState({ ...TodoFormState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!TodoFormState.name || !TodoFormState.description) return;
      const todo = { ...TodoFormState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div>
      <NavigationBar title={'To Do Page'}></NavigationBar>
      <div className='container'>
        <h2>Amplify Todos</h2>
        <input
          onChange={(event) => setInput('name', event.target.value)}
          className='input'
          value={TodoFormState.name}
          placeholder='Name'
        />
        <input
          onChange={(event) => setInput('description', event.target.value)}
          className='input'
          value={TodoFormState.description}
          placeholder='Description'
        />
        <button className='button' onClick={addTodo}>
          Create Todo
        </button>
        {todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} className='todo'>
            <p className='todoName'>{todo.name}</p>
            <p className='todoDescription'>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
