/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Todo from '@/store/todos';

let TodoStore: Todo;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initialiseStores(store: Store<any>): void {
  TodoStore = getModule(Todo, store);
}

export { initialiseStores, TodoStore };
