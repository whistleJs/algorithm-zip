import { TestCase } from "@util/model";

import solution from "./solve";

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [2, 1, 6],
    answer: [2, 1, 6, 5],
    description: `
      [입출력 예 #1]\n\n
      
      마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.
    `,
  },
  {
    input: [5, 2, 1, 7, 5],
    answer: [5, 2, 1, 7, 5, 10],
    description: `
      [입출력 예 #2]\n\n
      
      마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.
    `,
  },
];

describe("마지막 두 원소", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
