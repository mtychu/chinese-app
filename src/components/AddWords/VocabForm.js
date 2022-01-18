/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createFlashcard } from '../../graphql/mutations';
import { listFlashcards } from '../../graphql/queries';
import '../../index.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const initialState = {
  chineseSimp: '',
  chineseTrad: '',
  meanings: [],
  meaningMnemonic: '',
  meaningHint: '',
  readings: '',
  readingMnemonic: '',
  readingHint: '',
  examples: [],
  examplesPinyin: [],
};

const VocabForm = () => {
  const [VocabFormState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  function setInput(key, value) {
    setFormState({ ...TodoFormState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listFlashcards));
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
      <div className='container'>
        <h2>Add Vocab</h2>
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
          Add Vocab
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

export default VocabForm;
