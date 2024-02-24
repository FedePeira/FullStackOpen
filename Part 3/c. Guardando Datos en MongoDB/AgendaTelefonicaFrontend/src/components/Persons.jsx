import PropTypes from 'prop-types';

const Persons = ({ array, deletePerson }) => {
  return(
    <ul>
        {array && array.map(person => 
          <li key={person.id}>
            {person.name} / {person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </li>)}
      </ul>
  )
}

Persons.propTypes = {
  deletePerson: PropTypes.func.isRequired,
  array: PropTypes.string.isRequired,
};

export default Persons