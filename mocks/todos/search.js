import state from './resource';

export default {
  get: () => [200, state.todos],
};
