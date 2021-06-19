type Concat<T extends any[], U extends any[]> = [...T, ...U];

type concat_test = Concat<["a", "b", "c"], ["1", "2", "3"]>;

export {};
