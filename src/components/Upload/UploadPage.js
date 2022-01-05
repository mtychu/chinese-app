// NavBar at the top of most pages
import { useEffect, useState } from 'react';
import '../../index.css';
import CsvReader from './CsvReader';
import NavigationBar from '../Navbar/NavigationBar.js';
import { createFlashcard } from '../../graphql/mutations';
import { listFlashcards } from '../../graphql/queries';

import Amplify, { API, graphqlOperation } from 'aws-amplify';

const UploadPage = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  async function addFlashcard(flashcard) {
    try {
      const result = await API.graphql(graphqlOperation(createFlashcard, { input: flashcard }));
      console.log(result);
    } catch (err) {
      console.log('error creating flashcard:', err);
    }
  }

  async function fetchFlashcards() {
    try {
      const flashcardData = await API.graphql(graphqlOperation(listFlashcards));
      const flashcards = flashcardData.data.listFlashcards.items;
      setFlashcards(flashcards);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <NavigationBar title={'Upload Page'}></NavigationBar>
      <CsvReader></CsvReader>
    </div>
  );
};

export default UploadPage;
