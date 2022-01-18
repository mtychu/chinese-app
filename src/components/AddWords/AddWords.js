import '../../index.css';
import BulkUpload from './BulkUpload';
import VocabForm from './VocabForm';
import NavigationBar from '../Navbar/NavigationBar.js';

const AddWords = () => {
  return (
    <div>
      <NavigationBar title={'Upload Page'}></NavigationBar>
      <VocabForm></VocabForm>
      <BulkUpload></BulkUpload>
    </div>
  );
};

export default AddWords;
