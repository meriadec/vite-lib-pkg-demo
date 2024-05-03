// ici tu remplace par: from "@my-private-npm/blabla"
import { getAge, Foo } from "../../on-va-dire-que-c-le-package";

const toto: Foo = {
  age: 5,
  name: "foo",
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    age: ${getAge(toto)}
  </div>
`;
