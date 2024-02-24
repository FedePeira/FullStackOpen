require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
      response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
      .then(person => {
          if(person){
              response.json(person)
          } else {
              response.status(404).end()
          }
      })
      .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
      .then(result => {
          response.status(204).end()
          console.log(result)
      })
      .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const { name, number } = request.body

  Person.findByIdAndUpdate(
      request.params.id,
      { name, number },
      { new: true, runValidators: true, name: 'query' }
  )
      .then(updatedPerson => {
          response.json(updatedPerson)
      })
      .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if(!body.number) {
      return response.status(400).json({
          error: 'number missing'
      })
  }

  if(!body.name) {
      return response.status(400).json({
          error: 'name missing'
      })
  }

  const person = new Person ({
      name: body.name,
      number: body.number,
  })

  person.save().then(savedPerson => {
      response.json(savedPerson)
  })
})

app.get('/info', (request, response) => {
  const currentTime = new Date().toLocaleString()
  Person.countDocuments({}, (error, count) => {
      if(error){
          console.error(error)
          return response.status(500).json({ Error: 'An error ocurred while retrieving the count'  })
      }
      console.log(count)
      if(count !== 0) {
          response.send(`<p>Phonebook has info for ${count}</p><br/><p>${currentTime}</p>`)
      } else {
          return response.status(400).json({
              error: 'list empty'
          })
      }
  })
  const size = Person.length
  console.log(size)
  if(size !== 0) {
      response.send(`<p>Phonebook has info for ${size}</p><br/><p>${currentTime}</p>`)
  } else {
      return response.status(400).json({
          error: 'list empty'
      })
  }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
