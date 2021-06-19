type MyExclude<T, U> = T extends U ? never : T;

type test = MyExclude<"a" | "b" | "c", "a">;

/**
 * In instantiations of a distributive conditional type T extends U ? X : Y,
 * references to T within the conditional type are resolved to individual constituents of the union type
 *
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
 */

export {};
