import PropTypes from 'prop-types';

const Filter = ({ value, handleChange }) => {
  return(
    <div>
      filter shown with<input value={value} onChange={handleChange}/>
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.func.isRequired,
  handleChange: PropTypes.string.isRequired,
};

export default Filter