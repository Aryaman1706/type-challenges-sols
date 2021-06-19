type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadOnly<Todo> = {
  title: "test",
  description: "test",
};

// todo.title = "new test";

export {};
