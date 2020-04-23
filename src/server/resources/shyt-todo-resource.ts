import { ResourceBase } from './resource-base';
import { resource, get, template, TemplateResponse, RedirectResponse, ApiResponse, CookieResponse } from 'resource-decorator';
import {ShytTodoModel} from '../models/shyt-todo-model';

const _shytTodos: ShytTodoModel[] = [
  new ShytTodoModel({
    id: 0,
    title: 'morning beverage'
  }),
  new ShytTodoModel({
    id: 1,
    title: 'morning meditation'
  }),
  new ShytTodoModel({
    id: 2,
    title: 'morning quik workout'
  }),
  new ShytTodoModel({
    id: 3,
    title: 'morning reads'
  }),
  new ShytTodoModel({
    id: 4,
    title: 'morning snack'
  }),
  new ShytTodoModel({
    id: 5,
    title: 'draw/sketch'
  }),
  new ShytTodoModel({
    id: 6,
    title: 'work on website ui design'
  }),
];


@resource({
  basePath: '',
})
export class ShytTodoResource extends ResourceBase {
  @template()
  async shytTodoPage(): Promise<TemplateResponse | RedirectResponse> {
    return new TemplateResponse('shyttodo.html');
  }

  @get({
    path: '/api/shyttodo'
  })
  async getMessage(): Promise<ApiResponse | CookieResponse | void> {
    return new ApiResponse(_shytTodos);
  }
}
