require('dotenv').config()
// mongoose.set('strictQuery', true)
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// const http = require('http');
// const app = require('./app');

// const port = process.env.PORT || 4000;
// const server = http.createServer(app);

// server.listen(port, undefined () => {
//     console.log(`Started on port ${port}`)
// })

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers');
const { undefined } = require('webidl-conversions');
app.use('/subscribers', subscribersRouter)

app.listen(4040, () => console.log('Server Started'))