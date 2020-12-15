const express = require('express')
const app = express()

const host = '0.0.0.0'
const port = 3000

app.get('/', (_, res) => res.send('Hello from NodeJS!'))
app.listen(port, host, () => {
    console.log(`Express.js server running at http://${host}:${port}/`)
})