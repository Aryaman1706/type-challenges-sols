type If<C, T, F> = C extends true ? T : F;

type if_test1 = If<true, number, string>;

type if_test2 = If<false, number, string>;

export {};
