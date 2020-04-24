import {TodoModel} from '../../server/models/todo-model';

export async function getTodos(): Promise<TodoModel[]> {
  const response = await window.fetch(
    '/api/todo',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return (await response.json()).map((record: Record<string, unknown>) => new TodoModel(record));
}

export async function postTodo(todos: TodoModel): Promise<TodoModel[]> {
  const response = await window.fetch(
    '/api/todo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todos)
    }
  );
  return (await response.json()).map((record: Record<string, unknown>) => new TodoModel(record));
}

export async function putTodo(todo: TodoModel): Promise<TodoModel[]> {
  const response = await window.fetch(
    `/api/todo/${todo.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }
  );
  return (await response.json()).map((record: Record<string, unknown>) => new TodoModel(record));
}

export async function deleteTodo(id: string): Promise<TodoModel[]> {
  const response = await window.fetch(
    `/api/todo/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );
  return (await response.json()).map((record: Record<string, unknown>) => new TodoModel(record));
}
