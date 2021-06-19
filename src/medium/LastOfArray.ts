type Last<T extends any[]> = T extends [...any[], infer Tail] ? Tail : never;

type Test = Last<[3, 2, 1]>;
// type Test2 = Last<string>;

export {};
