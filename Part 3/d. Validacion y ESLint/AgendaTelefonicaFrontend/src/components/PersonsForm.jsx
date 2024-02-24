import PropTypes from 'prop-types';

const PersonsForm = (props) => {
  return(
    <form onSubmit={props.createPerson}>
      <div>
        name: <input value={props.valueName} onChange={props.handleNameChange}/>
      </div>
      <div>number: <input value={props.valueNumber} onChange={props.handleNumberChange}/></div>
      <div> <button type="submit">Add</button> </div>
    </form>
  )
}

PersonsForm.propTypes = {
  createPerson: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  valueNumber: PropTypes.string.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
};

export default PersonsForm
