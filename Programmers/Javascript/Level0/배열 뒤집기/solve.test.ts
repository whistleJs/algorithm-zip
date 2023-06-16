import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5],
    answer: [5, 4, 3, 2, 1],
    description: `
      [입출력 예 #1]\n\n
      
      num_list가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.
    `,
  },
  {
    input: [1, 1, 1, 1, 1, 1, 2],
    answer: [2, 1, 1, 1, 1, 1, 1],
    description: `
      [입출력 예 #2]\n\n
      
      num_list가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.
    `,
  },
  {
    input: [1, 0, 1, 1, 1, 3, 5],
    answer: [5, 3, 1, 1, 1, 0, 1],
    description: `
      [입출력 예 #3]\n\n
      
      num_list가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.
    `,
  },
];

describe("배열 뒤집기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
