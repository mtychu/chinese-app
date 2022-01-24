/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createFlashcard } from '../../graphql/mutations';
import { listFlashcards, getFlashcard } from '../../graphql/queries';
import '../../index.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const initialState = {
  chineseSimp: '',
  chineseTrad: '',
  meanings: [],
  meaningMnemonic: '',
  meaningHint: '',
  readings: [],
  readingMnemonic: '',
  readingHint: '',
  examples: [],
  examplesPinyin: [],
};

const VocabForm = () => {
  const [VocabFormState, setFormState] = useState(initialState);
  const [CardPreviewTrad, setsetCardPreviewTrad] = useState([]);
  const [CardPreviewSimp, setsetCardPreviewSimp] = useState([]);
  const [todos, setTodos] = useState([]);

  function setInput(key, value) {
    setFormState({ ...VocabFormState, [key]: value });
    //[key] needs to be in [] or would just be in there as a string
  }

  async function fetchFlashcardByWord(chineseSimp, chineseTrad) {
    var char = chineseTrad || chineseSimp;
    //TOD IF chinseTrad EXISTS ELSE TAKE THE OTHER ONE
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
      if (!VocabFormState.name || !VocabFormState.description) return;
      const todo = { ...VocabFormState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createFlashcard, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <form className='container'>
      <h2>Add Vocab</h2>
      <input
        onChange={(event) => {
          setInput('chineseTrad', event.target.value);
          setsetCardPreviewTrad(event.target.value.split(''), () => console.log(CardPreviewTrad));
        }}
        className='input'
        value={VocabFormState.chineseTrad}
        placeholder='繁體 Vocab'
      />
      <input
        onChange={(event) => setInput('chineseSimp', event.target.value)}
        className='input'
        value={VocabFormState.chineseSimp}
        placeholder='简体 Vocab'
      />
      {/* TODO MAKE CHINESE AUTO TRANSLATE BETWEEN THE TWO */}
      <input
        onChange={(event) => setInput('meanings', event.target.value)}
        className='input'
        value={VocabFormState.name}
        placeholder='Name'
      />
      <input
        onChange={(event) => setInput('name', event.target.value)}
        className='input'
        value={VocabFormState.name}
        placeholder='Name'
      />
      <button className='button' onClick={addTodo}>
        Add Vocab
      </button>
    </form>
  );
};

export default VocabForm;
