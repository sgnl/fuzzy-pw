
'use strict'

const Express = require('express')
const Server = Express()

Server.use(Express.static('public'))

Server.listen(9090, 'localhost', _ => {
  console.log(`Server started at http://localhost:9090`)
})
