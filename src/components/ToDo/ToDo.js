/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo, createFlashcard } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';
import NavigationBar from '../Navbar/NavigationBar.js';
import '../../index.css';

import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' };

const testWords = [
  {
    id: 1,
    level: '1',
    chineseTrad: '的',
    chineseSimp: '的',
    meanings: ['(possessive particle)', 'of', 'really and truly', 'aim', 'clear'],
    meaningMnemonic: 'Mnemonic 1',
    meaningHint: 'hint 1',
    reading: 'de',
    readingMnemonic: 'reading mnemonic 1',
    readingHint: 'reading hint 1',
    examples: 'example 1.1, example 1.2',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 2,
    level: '1',
    chineseTrad: '一',
    chineseSimp: '一',
    meanings: ['one', '1', 'single', 'a(n)'],
    meaningMnemonic: 'Mnemonic 2',
    meaningHint: 'hint 2',
    reading: 'yī',
    readingMnemonic: 'reading mnemonic 2',
    readingHint: 'reading hint 2',
    examples: 'example 1.1, example 1.3',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 3,
    level: '1',
    chineseTrad: '是',
    chineseSimp: '是',
    meanings: ['is', 'are', 'am', 'yes', 'to be'],
    meaningMnemonic: 'Mnemonic 3',
    meaningHint: 'hint 3',
    reading: 'shì',
    readingMnemonic: 'reading mnemonic 3',
    readingHint: 'reading hint 3',
    examples: 'example 1.1, example 1.4',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 4,
    level: '1',
    chineseTrad: '不',
    chineseSimp: '不',
    meanings: ['(negative prefix)', 'not', 'no'],
    meaningMnemonic: 'Mnemonic 4',
    meaningHint: 'hint 4',
    reading: 'bù',
    readingMnemonic: 'reading mnemonic 4',
    readingHint: 'reading hint 4',
    examples: 'example 1.1, example 1.5',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 5,
    level: '1',
    chineseTrad: '了',
    chineseSimp: '了',
    meanings: [
      '(modal particle intensifying preceding clause)',
      '(completed action marker)',
      'to know',
      'to understand',
      'to know',
      'clear',
      'look afar from a high place',
    ],
    meaningMnemonic: 'Mnemonic 5',
    meaningHint: 'hint 5',
    reading: 'le',
    readingMnemonic: 'reading mnemonic 5',
    readingHint: 'reading hint 5',
    examples: 'example 1.1, example 1.6',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 6,
    level: '1',
    chineseTrad: '在',
    chineseSimp: '在',
    meanings: ['(located) at', 'in', 'exist'],
    meaningMnemonic: 'Mnemonic 6',
    meaningHint: 'hint 6',
    reading: 'zài',
    readingMnemonic: 'reading mnemonic 6',
    readingHint: 'reading hint 6',
    examples: 'example 1.1, example 1.7',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 7,
    level: '1',
    chineseTrad: '人',
    chineseSimp: '人',
    meanings: ['man', 'person', 'people'],
    meaningMnemonic: 'Mnemonic 7',
    meaningHint: 'hint 7',
    reading: 'rén',
    readingMnemonic: 'reading mnemonic 7',
    readingHint: 'reading hint 7',
    examples: 'example 1.1, example 1.8',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 8,
    level: '1',
    chineseTrad: '有',
    chineseSimp: '有',
    meanings: ['to have', 'there is', 'there are', 'to exist', 'to be'],
    meaningMnemonic: 'Mnemonic 8',
    meaningHint: 'hint 8',
    reading: 'yǒu',
    readingMnemonic: 'reading mnemonic 8',
    readingHint: 'reading hint 8',
    examples: 'example 1.1, example 1.9',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 9,
    level: '1',
    chineseTrad: '我',
    chineseSimp: '我',
    meanings: ['I', 'me', 'myself'],
    meaningMnemonic: 'Mnemonic 9',
    meaningHint: 'hint 9',
    reading: 'wǒ',
    readingMnemonic: 'reading mnemonic 9',
    readingHint: 'reading hint 9',
    examples: 'example 1.1, example 1.10',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 10,
    level: '1',
    chineseTrad: '他',
    chineseSimp: '他',
    meanings: ['he', 'him'],
    meaningMnemonic: 'Mnemonic 10',
    meaningHint: 'hint 10',
    reading: 'tā',
    readingMnemonic: 'reading mnemonic 10',
    readingHint: 'reading hint 10',
    examples: 'example 1.1, example 1.11',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 11,
    level: '1',
    chineseTrad: '這',
    chineseSimp: '这',
    meanings: [
      'this',
      'these',
      'this',
      'these',
      '(sometimes used before a measure word',
      'especially in Beijing)',
    ],
    meaningMnemonic: 'Mnemonic 11',
    meaningHint: 'hint 11',
    reading: 'zhè',
    readingMnemonic: 'reading mnemonic 11',
    readingHint: 'reading hint 11',
    examples: 'example 1.1, example 1.12',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 12,
    level: '1',
    chineseTrad: '個',
    chineseSimp: '个',
    meanings: ['(a measure word)', 'individual'],
    meaningMnemonic: 'Mnemonic 12',
    meaningHint: 'hint 12',
    reading: 'ge',
    readingMnemonic: 'reading mnemonic 12',
    readingHint: 'reading hint 12',
    examples: 'example 1.1, example 1.13',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 13,
    level: '1',
    chineseTrad: '們',
    chineseSimp: '们',
    meanings: ['(plural marker for pronouns and a few animate nouns)'],
    meaningMnemonic: 'Mnemonic 13',
    meaningHint: 'hint 13',
    reading: 'men',
    readingMnemonic: 'reading mnemonic 13',
    readingHint: 'reading hint 13',
    examples: 'example 1.1, example 1.14',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 14,
    level: '1',
    chineseTrad: '中',
    chineseSimp: '中',
    meanings: [
      'within',
      'among',
      'in',
      'middle',
      'center',
      'while (doing sth)',
      'during',
      'China',
      'Chinese',
      'hit (the mark)',
    ],
    meaningMnemonic: 'Mnemonic 14',
    meaningHint: 'hint 14',
    reading: 'zhōng',
    readingMnemonic: 'reading mnemonic 14',
    readingHint: 'reading hint 14',
    examples: 'example 1.1, example 1.15',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 15,
    level: '1',
    chineseTrad: '來',
    chineseSimp: '来',
    meanings: ['to come'],
    meaningMnemonic: 'Mnemonic 15',
    meaningHint: 'hint 15',
    reading: 'lái',
    readingMnemonic: 'reading mnemonic 15',
    readingHint: 'reading hint 15',
    examples: 'example 1.1, example 1.16',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 16,
    level: '1',
    chineseTrad: '我的',
    chineseSimp: '我的',
    meanings: ['mine'],
    meaningMnemonic: 'Mnemonic 16',
    meaningHint: 'hint 16',
    reading: 'wǒde',
    readingMnemonic: 'reading mnemonic 16',
    readingHint: 'reading hint 16',
    examples: 'example 1.1, example 1.17',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 17,
    level: '1',
    chineseTrad: '我們',
    chineseSimp: '我們',
    meanings: ['us'],
    meaningMnemonic: 'Mnemonic 17',
    meaningHint: 'hint 17',
    reading: 'wǒmen',
    readingMnemonic: 'reading mnemonic 17',
    readingHint: 'reading hint 17',
    examples: 'example 1.1, example 1.18',
    prereqs: [],
    unlocks: [],
  },
  {
    id: 18,
    level: '1',
    chineseTrad: '他們',
    chineseSimp: '他們',
    meanings: ['them'],
    meaningMnemonic: 'Mnemonic 18',
    meaningHint: 'hint 18',
    reading: 'tāmen',
    readingMnemonic: 'reading mnemonic 18',
    readingHint: 'reading hint 18',
    examples: 'example 1.1, example 1.19',
    prereqs: [],
    unlocks: [],
  },
];

const App = () => {
  const [TodoFormState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

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

  async function addFlashcard(flashcard) {
    try {
      const result = await API.graphql(graphqlOperation(createFlashcard, { input: flashcard }));
      console.log(result);
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
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
        <button className='button' onClick={() => testWords.map(addFlashcard)}>
          Add Data
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

export default App;
