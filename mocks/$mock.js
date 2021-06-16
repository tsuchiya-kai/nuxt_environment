/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './todos/delete/_todo_id'
import mock1 from './todos/create'

export default (client) => mockServer([
  {
    path: '/todos/delete/_todo_id',
    methods: mock0
  },
  {
    path: '/todos/create',
    methods: mock1
  }
], client, '')
