type KeyValuePair = {
  [k in string | number]: string | number | boolean | KeyValuePair;
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends KeyValuePair
    ? DeepReadonly<T[P]>
    : T[P];
};

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
    };
  };
};

type Y = DeepReadonly<X>;

export {};
