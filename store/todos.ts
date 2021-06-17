import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '@/plugins/api';

type Todo = {
  id: number;
  done: boolean;
  title: string;
};

@Module({ name: 'todos', stateFactory: true, namespaced: true })
export default class Todos extends VuexModule {
  // state
  private todos: Todo[] = [];

  // getter
  public get getTodos(): Todo[] {
    return this.todos;
  }

  public get getTodo(): (id: number) => Todo | undefined {
    return (id: number) => this.todos.find((todo) => todo.id === id);
  }

  public get getTodoCount(): number {
    return this.todos.length;
  }

  // mutation
  @Mutation
  private set(todos: Todo[]): void {
    this.todos = todos;
  }

  @Mutation
  private add(todo: Todo): void {
    this.todos.push(todo);
  }

  @Mutation
  private update(id: number, newData: Todo): void {
    const todo = this.getTodo(id);
    if (todo) {
      todo.done = newData.done;
      todo.title = newData.title;
    }
  }

  @Mutation
  private remove(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // action
  @Action({ rawError: true })
  public async fetchTodos(): Promise<void> {
    const { data } = await $axios.get<Todo[]>('/todos/search');
    this.set(data);
  }

  @Action({ rawError: true })
  public async createTodo(payload: string): Promise<void> {
    const { data } = await $axios.post<Todo>('/todos/create', {
      title: payload,
    });
    this.add(data);
  }

  @Action({ rawError: true })
  async updateTodo(id: number, todo: Todo): Promise<void> {
    const { data } = await $axios.post<Todo>(`/todos/update`, { id, todo });
    this.update(id, data);
  }

  @Action({ rawError: true })
  async deleteTodo(id: number): Promise<void> {
    await $axios.delete(`/todos/delete/${id}`);
    this.remove(id);
  }
}
