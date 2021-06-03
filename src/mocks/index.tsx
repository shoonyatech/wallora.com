/* eslint-disable global-require */

// mocks/index.js

if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.printHandlers()
  server.listen()
} else {
  const { worker } = require('./browser')
  worker.start()
}

export {}
