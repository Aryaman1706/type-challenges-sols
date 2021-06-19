type MyReturnType<T> = T extends (...rest: any[]) => infer X ? X : never;

type fn1 = () => string;
const fn2 = (v: boolean) => (v ? 1 : 2);
const fn3 = (v: boolean, _w: any) => (v ? 1 : 2);

type returnType_test1 = MyReturnType<fn1>;
type returnType_test2 = MyReturnType<typeof fn2>;
type returnType_test3 = MyReturnType<typeof fn3>;

export {};
