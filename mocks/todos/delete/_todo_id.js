// sample
import state from '../resource';

export default {
  delete: ({ values }) => {
    const id = values.todo_id;
    const index = state.todos.indexOf((todo) => todo.id === id);
    state.todos.splice(index, 1);

    return [201];
  },
};
