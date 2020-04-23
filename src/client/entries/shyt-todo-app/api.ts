import {ShytTodoModel} from '../../../server/models/shyt-todo-model';

export async function getShytTodos(): Promise<ShytTodoModel[]> {

  const response = await window.fetch(
    '/api/shyttodo',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return (await response.json()).map((record: Record<string, unknown>) => new ShytTodoModel(record));

}