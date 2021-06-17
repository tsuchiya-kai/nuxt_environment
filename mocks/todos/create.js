// sample
import state from './resource';

export default {
  post: async ({ data }) => {
    const newItem = {
      id: state.nextId++,
      done: false,
      title: data.title,
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    state.todos.push(newItem);

    return [201, newItem];
  },
};
