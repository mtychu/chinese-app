/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createFlashcard } from '../../graphql/mutations';
import { listFlashcards, getFlashcard } from '../../graphql/queries';
import '../../index.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const VocabForm = () => {
  const [chineseTradForm, setchineseTradForm] = useState();
  const [chineseSimpForm, setchineseSimpForm] = useState();
  const [meaningsForm, setmeaningsForm] = useState();
  const [meaningMnemonicForm, setmeaningMnemonicForm] = useState();
  const [meaningHintForm, setmeaningHintForm] = useState([]);
  const [readingsForm, setreadingsForm] = useState([]);
  const [readingMnemonicForm, setreadingMnemonicForm] = useState([]);
  const [readingHintForm, setreadingHintForm] = useState([]);
  const [cardPreviewTrad, setCardPreviewTrad] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log({
      chineseTradForm: chineseTradForm,
      chineseSimpForm: chineseSimpForm,
      meaningsForm: meaningsForm,
      readingsForm: readingsForm,
    });
  });

  function pinyinTransform(userString) {}

  async function fetchFlashcardByWord(chineseSimp, chineseTrad) {
    var char = chineseTrad || chineseSimp;
    //TODO IF chinseTrad EXISTS ELSE TAKE THE OTHER ONE
    try {
      const todoData = await API.graphql(graphqlOperation(listFlashcards));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addFlashcard() {
    try {
      if (!chineseSimpForm || !chineseTradForm) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      await API.graphql(graphqlOperation(createFlashcard, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <form className='container'>
      <h2>Add Vocab 加詞彙</h2>
      <input
        onChange={(event) => {
          setInput('chineseTrad', event.target.value);
          setCardPreviewTrad(event.target.value.split(''), () => console.log(cardPreviewTrad));
        }}
        className='input'
        value={chineseTradForm}
        placeholder='繁體 Vocab'
      />
      <input
        onChange={(event) => setInput('chineseSimp', event.target.value)}
        className='input'
        value={chineseSimpForm}
        placeholder='简体 Vocab'
      />
      {/* TODO MAKE CHINESE AUTO TRANSLATE BETWEEN THE TWO */}
      <input
        onChange={(event) => setInput('meanings', event.target.value)}
        className='input'
        value={readingsForm}
        placeholder='Readings (seperated by comma)'
      />
      <input
        onChange={(event) => setInput('name', event.target.value)}
        className='input'
        value={meaningsForm}
        placeholder='Meanings (separated by comma)'
      />
      <button className='button' onClick={addFlashcard}>
        Add Vocab
      </button>
    </form>
  );
};

export default VocabForm;
