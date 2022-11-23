import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = [number, number, number];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [5, 3, 2],
    answer: 10,
    description: `
      [입출력 예 #1]\n\n
      
      1부터 5까지의 약수의 개수는 순서대로 [1, 2, 2, 3, 2]개입니다. 모두 공격력 제한 수치인 3을 넘지 않기 때문에 필요한 철의 무게는 해당 수들의 합인 10이 됩니다. 따라서 10을 return 합니다.
    `,
  },
  {
    input: [10, 3, 2],
    answer: 21,
    description: `
      [입출력 예 #2]\n\n
      
      1부터 10까지의 약수의 개수는 순서대로 [1, 2, 2, 3, 2, 4, 2, 4, 3, 4]개입니다. 공격력의 제한수치가 3이기 때문에, 6, 8, 10번 기사는 공격력이 2인 무기를 구매합니다. 따라서 해당 수들의 합인 21을 return 합니다.
    `,
  },
];

describe("기사단원의 무기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
