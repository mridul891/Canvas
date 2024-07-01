const express = require('express')
const { connectdb } = require('./Database/connect')
const app = express()

app.get('/', (req, res) => res.json('server setup done'))

app.post('/login', )

connectdb()
    .then(() => {
        app.listen(3000, () => console.log('server running'))
    })
    .catch((err) => {
        console.log('Database Failed To connect ', err)
    })