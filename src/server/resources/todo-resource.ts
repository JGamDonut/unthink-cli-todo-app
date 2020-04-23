import { ResourceBase } from './resource-base';
import { resource, get, template, TemplateResponse, RedirectResponse, ApiResponse, CookieResponse } from 'resource-decorator';
import {TodoModel} from '../models/todo-model';

const _todos: TodoModel[] = [
  new TodoModel({
    id: 0,
    title: 'morning beverage'
  }),
  new TodoModel({
    id: 1,
    title: 'morning meditation'
  }),
  new TodoModel({
    id: 2,
    title: 'morning quik workout'
  }),
  new TodoModel({
    id: 3,
    title: 'morning reads'
  }),
  new TodoModel({
    id: 4,
    title: 'morning snack'
  }),
  new TodoModel({
    id: 5,
    title: 'draw/sketch'
  }),
  new TodoModel({
    id: 6,
    title: 'work on website ui design'
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
  async getMessage(): Promise<ApiResponse | CookieResponse | void> {
    return new ApiResponse(_todos);
  }
}
