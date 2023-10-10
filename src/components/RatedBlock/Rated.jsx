import './rated.scss';

const Rated = ({ ...props }) => {
  const { title, type } = props;
  return (
    <div className='rate'>
      <h3>Топ лучших фильмов</h3>
      <div className='card'>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  );
};

export default Rated;
