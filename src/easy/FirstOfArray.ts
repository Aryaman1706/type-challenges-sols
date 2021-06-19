/**
 * type arr1 = ['a', 'b', 'c']
 * type head1 = First<arr1> // expected to be 'a'
 */

type First<T extends any[]> = T[0] extends undefined ? never : T[0];

type arr1 = ["a"];

type head = First<arr1>;

export {};
