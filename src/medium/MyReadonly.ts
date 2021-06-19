type Helper<X, Y extends X> = X extends Y ? never : X;

type MyReadonly2<T, K extends keyof T = keyof T> = {
  +readonly [Property in K]: T[Property];
} &
  {
    [Property in Helper<keyof T, K>]: T[Property];
  };

export {};
