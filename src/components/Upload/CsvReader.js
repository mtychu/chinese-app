import { useState } from 'react';
import Papa from 'papaparse';
import { createFlashcard } from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

const CsvReader = () => {
  const [csvArray, setCsvArray] = useState([]);
  const [loading, setLoading] = useState(false);

  async function addFlashcard(flashcard) {
    try {
      const result = await API.graphql(graphqlOperation(createFlashcard, { input: flashcard }));
      console.log(result.data.createFlashcard.chineseTrad);
    } catch (err) {
      console.log('error creating flashcard:', err);
    }
  }

  const preview = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvJson = Papa.parse(e.target.result, { delimiter: '|', header: true });
      setCsvArray(csvJson.data);
      console.log(csvJson.data);
    };

    reader.readAsText(file, 'UTF-8');
  };

  const parseCard = (flashcard) => {
    try {
      return {
        ...flashcard,
        examples: stringArrayToJson(flashcard.examples),
        meanings: stringArrayToJson(flashcard.meanings),
        prereqs: stringArrayToJson(flashcard.prereqs),
        reading: stringArrayToJson(flashcard.reading),
        unlocks: stringArrayToJson(flashcard.unlocks),
      };
    } catch (e) {
      console.error(e);
      console.error(flashcard);
    }
  };

  const stringArrayToJson = (stringArray) => {
    return JSON.parse('{"data":' + stringArray + '}').data;
  };

  const submit = async () => {
    setLoading(true);

    for (const flashcard of csvArray) {
      addFlashcard(parseCard(flashcard));
    }
    setLoading(false);
  };

  return (
    <div className='container'>
      <br />
      <form id='csv-form'>
        <input
          type='file'
          accept='.csv'
          onChange={(e) => {
            preview(e.target.files[0]);
          }}
        ></input>
        <br />
        <br />
      </form>
      {csvArray.slice(0, 5).map((word, index) => (
        <div key={index} className='todo'>
          <p className='todoName'>{word.chineseTrad}</p>
          <p className='todoDescription'>{word.meanings}</p>
        </div>
      ))}
      <button
        disabled={loading || csvArray.length === 0}
        onClick={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        Submit
      </button>
      {loading && <div>loading...</div>}
    </div>
  );
};

export default CsvReader;
