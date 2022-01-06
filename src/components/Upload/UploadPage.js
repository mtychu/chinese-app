import '../../index.css';
import CsvReader from './CsvReader';
import NavigationBar from '../Navbar/NavigationBar.js';

const UploadPage = () => {
  return (
    <div>
      <NavigationBar title={'Upload Page'}></NavigationBar>
      <CsvReader></CsvReader>
    </div>
  );
};

export default UploadPage;
