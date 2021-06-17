import { reactive } from '@nuxtjs/composition-api';

export default reactive({
  todos: [
    {
      id: 1,
      done: false,
      title: 'Mock data',
    },
  ],
  nextId: 2,
});
