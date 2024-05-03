export type Foo = {
  name: string;
  age: number;
};

export function getAge(foo: Foo): number {
  return foo.age;
}
