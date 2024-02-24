const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://FedePeira:${password}@cluster0.2u7p3uj.mongodb.net/practicaagendatelefonica?retryWrites=true&w=majority`

if (!mongoose.connection.readyState) {
  mongoose.connect(url)
}
mongoose.set('strictQuery', false)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 5) {
    if(process.argv.length === 3) {
        
        Person.find({}).then(result => {
            console.log('phonebook:')
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
            mongoose.connection.close()
        })
    } else {
        console.log('Usage: node mongo.js <password> <name> <number>')
    }
} else {
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}