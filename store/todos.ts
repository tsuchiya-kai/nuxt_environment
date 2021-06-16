import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '@/plugins/api';

type Todo = {
    id: Number;
    done: Boolean;
    title: String;
};

@Module({ name: 'todos', stateFactory: true, namespaced: true })
export default class Todos extends VuexModule {
    // state
    private todos: Todo[] = [];

    // getter
    public get getTodos() {
        return this.todos;
    }

    public get getTodo() {
        return (id: Number) => this.todos.find((todo) => todo.id === id);
    }

    public get getTodoCount() {
        return this.todos.length;
    }

    // mutation
    @Mutation
    private set(todos: Todo[]) {
        this.todos = todos;
    }

    @Mutation
    private add(todo: Todo) {
        this.todos.push(todo);
    }

    @Mutation
    private update(id: Number, newData: Todo) {
        const todo = this.getTodo(id);
        if (todo) {
            todo.done = newData.done;
            todo.title = newData.title;
        }
    }

    @Mutation
    private remove(id: Number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    // action
    @Action({ rawError: true })
    public async fetchTodos() {
        const { data } = await $axios.get<Todo[]>('/todos/search');
        this.set(data);
    }

    @Action({ rawError: true })
    public async createTodo(payload: String) {
        const { data } = await $axios.post<Todo>('/todos/create', {
            title: payload,
        });
        this.add(data);
    }

    @Action({ rawError: true })
    async updateTodo(id: Number, todo: Todo) {
        const { data } = await $axios.post<Todo>(`/todos/update`, { id, todo });
        this.update(id, data);
    }

    @Action({ rawError: true })
    async deleteTodo(id: Number) {
        await $axios.delete(`/todos/delete/${id}`);
        this.remove(id);
    }
}