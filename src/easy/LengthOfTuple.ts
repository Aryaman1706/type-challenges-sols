/**
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type teslaLength = Length<tesla>  // expected 4
 */

type Length<T extends readonly any[]> = T["length"];

type tesla = ["tesla", "model 3", "model X", "model Y"];
type teslaLength = Length<tesla>;

export {};
