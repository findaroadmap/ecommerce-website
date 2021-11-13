#!/usr/bin/env node
import app from '../app'
import debugLib from 'debug'
import http from 'http'
import {ECOMMERCE_SERVER_IP_ADRESS, ECOMMERCE_SERVER_PORT} from '../config'

const debug = debugLib('ecommerce-website:server')

app.set('port', ECOMMERCE_SERVER_PORT)

/**
 * Create HTTP server.
 */

var server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(ECOMMERCE_SERVER_PORT, ECOMMERCE_SERVER_IP_ADRESS)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof ECOMMERCE_SERVER_PORT === 'string'
    ? 'Pipe ' + ECOMMERCE_SERVER_PORT
    : 'Port ' + ECOMMERCE_SERVER_PORT

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : `${addr.address}:${addr.port}`
  console.log('Listening on ' + bind)
}
