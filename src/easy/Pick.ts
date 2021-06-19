type MyPick<T, K extends keyof T> = {
  [Prop in K]: T[Prop];
};

interface Test {
  key1: string;
  key2: string;
  key3: string;
  key4: string;
  key5: string;
}

const test: Pick<Test, "key1" | "key2"> = {
  key1: "test1",
  key2: "test2",
};

export {};
