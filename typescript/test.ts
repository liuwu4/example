// Partial
interface TestPartial {
  id: number;
  age?: number;
}
type useAfter = Partial<TestPartial>;


// 
type useRequired = Required<TestPartial>;


type result = Readonly<TestPartial>;
type after = Pick<TestPartial, 'age'>;

type use = Record<"id" | "name", String>;
interface testT {
  name: string;
}
interface testU {
  name: string,
  age: number;
  sex: number;
}
// <T, U>
type resultExclude = Exclude<"a" | "b", "b">;

type resutOmit = Omit<"a" | "b" | "c", 'a'>;
interface example {
  id: number;
  age: number;
  name: string;
}
type useOmit = Omit<example, "name">;

interface TestNul {
  name: null;
  age: undefined;
  id: number;
  email: string;
}
type useNoNull = NonNullable<keyof { [P in keyof TestNul]: TestNul[P] }>;

function testPa(age: number) { }
interface testFun {
  (arg: string, sex: string): void;
}
type funParams = Parameters<typeof testPa>;
type params = Parameters<testFun>;

class testConstruct {
  constructor(arg: number) {
    return String;
  }
}

type useConstruct = ConstructorParameters<typeof testConstruct>;


function func(): boolean {
  return false;
}
type useType = ReturnType<typeof func>;
// boolean
interface funcInter {
  (): number;
}
type useTypeInter = ReturnType<funcInter>;
// string;



type classReturn = InstanceType<typeof testConstruct>;