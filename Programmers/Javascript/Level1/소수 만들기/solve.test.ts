import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4],
    answer: 1,
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 4]를 이용해서 7을 만들 수 있습니다.
    `
  },
  {
    input: [1, 2, 7, 6, 4],
    answer: 4,
    description: `
      [입출력 예 #1]\n\n
      
      [1, 2, 4]를 이용해서 7을 만들 수 있습니다.\n
      [1, 4, 6]을 이용해서 11을 만들 수 있습니다.\n
      [2, 4, 7]을 이용해서 13을 만들 수 있습니다.\n
      [4, 6, 7]을 이용해서 17을 만들 수 있습니다.
    `
  },
];

describe('소수 만들기', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
