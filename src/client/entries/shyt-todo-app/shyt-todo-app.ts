import { component } from 'riot';
import ShytTodoApp from './shyt-todo-app.riot';

document.addEventListener('DOMContentLoaded', () => {
  component(ShytTodoApp)(document.querySelector('shyt-todo-app') || document.body);
});
