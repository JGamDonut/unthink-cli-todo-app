export class ShytTodoModel {
  id?: number;
  title: string;
  completed: boolean = false;

  constructor(init?: Partial<ShytTodoModel>) {
    Object.assign(this, init);
  }
}