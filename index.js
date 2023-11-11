const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))


let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-1-17T17:30:31.098Z",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only JavaScript",
        date: "2022-1-17T18:39:34.091Z",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-1-17T19:20:14.298Z",
        important: true
      },
      {
        content: "POST is used to add data to a REST api",
        date: "2022-07-17T12:09:13.540Z",
        important: true,
        id: 4
      },
      {
        content: "PUT is used to update data to a REST api",
        date: "2022-07-17T12:17:45.171Z",
        important: true,
        id: 5
      },
      {
        content: "kkk",
        date: "2023-10-21T18:55:39.507Z",
        important: false,
        id: 6
      }
]

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server started on part ${PORT}`)
})
