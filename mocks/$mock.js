/* eslint-disable */
import mockServer from 'axios-mock-server'
import mock0 from './todos/search'
import mock1 from './todos/resource'
import mock2 from './todos/delete/_todo_id'
import mock3 from './todos/create'

export default (client) => mockServer([
  {
    path: '/todos/search',
    methods: mock0
  },
  {
    path: '/todos/resource',
    methods: mock1
  },
  {
    path: '/todos/delete/_todo_id',
    methods: mock2
  },
  {
    path: '/todos/create',
    methods: mock3
  }
], client, '')
