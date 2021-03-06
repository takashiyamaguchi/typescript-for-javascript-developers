export { };

type MyExclude = DebugType;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

// Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type MyExtract<T, U> = T extends U ? T : never;

// NonNullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
