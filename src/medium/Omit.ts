type Helper<X, Y extends X> = X extends Y ? never : X;

type MyOmit<T, K extends keyof T> = {
  [Property in Helper<keyof T, K>]: T[Property];
};

type test = MyOmit<Todo, "description" | "completed">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export {};
