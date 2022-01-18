import '../../index.css';

const WordCard = (props) => {
  return (
    <div key={props.key} className='card'>
      <p className='card-title'>{props.chineseTrad + '/' + props.chineseSimp}</p>
      <p className='card-body'>{props.reading}</p>
      <p className='card-body'>{props.meanings}</p>
    </div>
  );
};

export default WordCard;
