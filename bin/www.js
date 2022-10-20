const http = require('http')
const app = require('../app')
require('dotenv').config()
const port = process.env.APP_PORT

app.set('port', port)

http.createServer(app).listen(port, () => {
    console.log(`The server is listerning on port ${port}`)
})