type Pop<T extends any[]> = T extends [...infer Rest, any] ? [...Rest] : never;

type Test = Pop<[1, 2, 3]>;
// type Test2 = Pop<string>

export {};
