
import PropTypes from 'prop-types';

const SuccessNotification = ({ message }) => {
    const styleSuccess = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    if(message === null) {
      return null
    } else {
        return(
            <div style={styleSuccess}>
              {message}
            </div>
          )
    }
}

SuccessNotification.propTypes = {
  message: PropTypes.func.isRequired,
};
  
export default SuccessNotification