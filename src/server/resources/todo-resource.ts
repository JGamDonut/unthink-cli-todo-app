import { ResourceBase } from './resource-base';
import {
  resource,
  get,
  template,
  TemplateResponse,
  RedirectResponse,
  ApiResponse,
  CookieResponse, post, body, del, path, ResourceError, put,

} from 'resource-decorator';
import {TodoModel} from '../models/todo-model';

const _todos: TodoModel[] = [
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'morning beverage',
    completed: false,
    dateCreated: new Date()
  }),
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'morning meditation',
    completed: false,
    dateCreated: new Date()
  }),
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'morning quik workout',
    completed: false,
    dateCreated: new Date()
  }),
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'morning reads',
    completed: false,
    dateCreated: new Date()
  }),
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'morning snack',
    completed: false,
    dateCreated: new Date()
  }),
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'draw/sketch',
    completed: false,
    dateCreated: new Date()
  }),
  new TodoModel({
    id: (Math.ceil(Math.random() * 1000000)),
    title: 'work on website ui design',
    completed: false,
    dateCreated: new Date()
  }),
];


@resource({
  basePath: '',
})
export class TodoResource extends ResourceBase {
  @template()
  async todoPage(): Promise<TemplateResponse | RedirectResponse> {
    return new TemplateResponse('todo.html');
  }

  @get({
    path: '/api/todo'
  })
  async getTodos(): Promise<ApiResponse | CookieResponse | void> {
    return new ApiResponse(_todos);
  }

  @post({
    path: '/api/todo'
  })
  async postTodo(@body() model: TodoModel): Promise<ApiResponse | CookieResponse | void> {
    _todos.push(
      new TodoModel({
        id: model.id,
        title: model.title,
        completed: model.completed,
        dateCreated: new Date()
      })
    );
    return new ApiResponse(_todos);
  }

  @put({
    path: '/api/todo/:id'
  })
  async putTodo(@path('id') id: string, @body() model: TodoModel): Promise<ApiResponse | CookieResponse | void> {
    const index: number = _todos.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      _todos[index].id = model.id || _todos[index].id;
      _todos[index].title = model.title || _todos[index].title;
      _todos[index].completed = model.completed || _todos[index].completed;
      _todos[index].dateCreated = model.dateCreated || _todos[index].dateCreated;
    }
    if (index === -1) {
      throw new ResourceError('Todo item does not exist.');
    }
    return new ApiResponse(_todos);
  }

  @del({
    path: '/api/todo/:id'
  })
  async deleteTodo(@path('id') id: string): Promise<ApiResponse | CookieResponse | void> {
    const index: number = _todos.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      _todos.splice(index, 1);
    }
    if (index === -1) {
      throw new ResourceError('Todo item does not exist.');
    }
    return new ApiResponse(_todos);
  }
}
