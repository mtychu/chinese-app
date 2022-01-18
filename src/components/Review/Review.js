import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getFlashcard, listUsers } from '../../graphql/queries';

import NavigationBar from '../Navbar/NavigationBar.js';
import '../../index.css';

const DisplayWord = () => {
  const [reviewQueue, setReviewQueue] = useState([]);
  const [currentWord, setCurrentWord] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);
  // use effect does once per page load
  // TODO use effect to load review queue

  async function fetchFlashcard(flascardId) {
    try {
      const flashcardData = await API.graphql(graphqlOperation(getFlashcard, { id: flascardId }));
      setCurrentWord(flashcardData);
    } catch (err) {
      console.log('error fetching flashcard');
    }
  }

  async function fetchUser() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      console.log(userData.data.listUsers.items[0].progress);
    } catch (err) {
      console.err(err);
    }
  }

  return (
    <div>
      <NavigationBar title={'Review'}></NavigationBar>
    </div>
  );
};

export default DisplayWord;
