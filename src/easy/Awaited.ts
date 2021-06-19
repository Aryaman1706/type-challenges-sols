type Awaited<T> = T extends Promise<infer X> ? X : never;

type test1 = Awaited<Promise<string>>;

type test2 = Awaited<string>;

export {};
