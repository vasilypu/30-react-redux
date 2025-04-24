const express = require('express')
const cors = require('cors')
const booksData = require('./data/books.json')

const app = express()

app.use(cors())

app.get('/random-book', (req, res) => {
  const randeomIndex = Math.floor(Math.random() * booksData.length)
  const randomBook = booksData[randeomIndex]
  res.json(randomBook)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
