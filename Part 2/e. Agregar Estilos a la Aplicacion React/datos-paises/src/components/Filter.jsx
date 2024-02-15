// Componente Filter
const Filter = ({ value, handleChange }) => {
    const filterContainer = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom:  20
    }

    const filterInput = {
        padding: 5,
        fontSize:  16,
        border:  '1 solid #ccc',
        borderRadius: 4,
        width: 300
    }

    return(
      <div style={filterContainer}>
        Find countries <input style={filterInput} value={value} onChange={handleChange} placeholder="paises..."/>
      </div>
    )
  }
 
  export default Filter