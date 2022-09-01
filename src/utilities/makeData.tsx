import faker from "@faker-js/faker";
//models
import { Person } from "../models/Person";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(80),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single"
    ])[0]!,
    id: faker.datatype.uuid()
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map(
      (d): Person => {
        return {
          ...newPerson()
        };
      }
    );
  };

  return makeDataLevel();
}
