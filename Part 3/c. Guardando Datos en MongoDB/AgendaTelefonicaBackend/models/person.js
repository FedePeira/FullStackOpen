const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true,
        validate: {
            validator: function(v) {
                return v.length >=  3
            },
            message: props => `${props.value} no es un nombre válido. Debe tener al menos  3 caracteres.`
        }
    },
    number: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const phone = /^(\d{2,3}-\d{7,8})$/
                return phone.test(v)
            },
            message: props => `${props.value} no es un número de teléfono válido. Debe tener el formato  09-1234556 o  040-22334455.`
        }
    },
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)
