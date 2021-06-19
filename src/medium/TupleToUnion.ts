type TupleToUnion<T extends any[]> = T[number];

type Test = TupleToUnion<[1, 2, "hello", true, "world"]>;

export {};
