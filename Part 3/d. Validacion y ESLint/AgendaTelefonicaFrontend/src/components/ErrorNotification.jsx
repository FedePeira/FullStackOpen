import PropTypes from 'prop-types';

const ErrorNotification = ({ message }) => {
    const styleError = {
        color: 'red',
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
            <div style={styleError}>
              {message}
            </div>
          )
    }
}

ErrorNotification.propTypes = {
  message: PropTypes.func.isRequired,
};

export default ErrorNotification