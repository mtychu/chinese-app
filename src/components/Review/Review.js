import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getFlashcard } from '../../graphql/queries';
import { createUser } from '../../graphql/mutations';

import NavigationBar from '../Navbar/NavigationBar.js';
import '../../index.css';

const exampleUser = {
  id: 'temp-id',
  displayName: 'BINGCHILLING',
  firstName: null,
  lastName: null,
  email: null,
  progress: [
    {
      flashcardId: 'ff7bc342-2806-435a-8ccc-65e5f5625b47',
      progress: 0,
      nextReview: '2020-07-07T11:11:00.111Z',
      userMeaning: null,
      userNotes: null,
    },
    {
      flashcardId: 'ff2f51ae-7577-4d70-939c-bfd078c73fdd',
      progress: 0,
      nextReview: '2020-07-07T11:11:00.111Z',
      userMeaning: null,
      userNotes: null,
    },
    {
      flashcardId: 'fbb0ef48-d8d5-454d-99d3-cdb8369af34b',
      progress: 0,
      nextReview: '2020-07-07T11:11:00.111Z',
      userMeaning: null,
      userNotes: null,
    },
    {
      flashcardId: 'fb4b6397-7b7d-48cd-997b-6e305b6e1c2f',
      progress: 0,
      nextReview: '2020-07-07T11:11:00.111Z',
      userMeaning: null,
      userNotes: null,
    },
    {
      flashcardId: 'faeb4936-5840-4c26-8eae-02716d201acc',
      progress: 0,
      nextReview: '2020-07-07T11:11:00.111Z',
      userMeaning: null,
      userNotes: null,
    },
  ],
};

const DisplayWord = () => {
  const [reviewQueue, setReviewQueue] = useState([]);
  const [currentWord, setCurrentWord] = useState({});

  // use effect does once per page load
  // TODO use effect to load review queue

  async function fetchFlashcard() {
    try {
      const flashcardData = await API.graphql(graphqlOperation(getFlashcard, { id: 'flashcard' }));
      setCurrentWord(flashcardData);
    } catch (err) {
      console.log('error fetching flashcard');
    }
  }

  async function addUser(user) {
    try {
      const result = await API.graphql(graphqlOperation(createUser, { input: user }));
    } catch (err) {
      console.error('error creating user:', err);
    }
  }

  const tempFunction = () => {
    addUser(exampleUser);
  };

  return (
    <div>
      <NavigationBar title={'Review'}></NavigationBar>
      <button className='button' onClick={tempFunction}>
        Add Temp User Test
      </button>
    </div>
  );
};

export default DisplayWord;
