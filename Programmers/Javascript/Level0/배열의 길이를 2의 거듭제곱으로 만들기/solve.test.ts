import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 3, 4, 5, 6],
    answer: [1, 2, 3, 4, 5, 6, 0, 0],
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 arr의 길이는 6입니다.\n
      arr의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다.\n
      따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.
    `,
  },
  {
    input: [58, 172, 746, 89],
    answer: [58, 172, 746, 89],
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 arr의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.
    `,
  },
];

describe("배열의 길이를 2의 거듭제곱으로 만들기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
