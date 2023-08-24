import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = number[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [1, 2, 1, 4, 5, 2, 9],
    answer: [2, 1, 4, 5, 2],
    description: `
      [입출력 예 #1]\n\n
      
      2가 있는 인덱스는 1번, 5번 인덱스뿐이므로 1번부터 5번 인덱스까지의 부분 배열인 [2, 1, 4, 5, 2]를 return 합니다.
    `,
  },
  {
    input: [1, 2, 1],
    answer: [2],
    description: `
      [입출력 예 #2]\n\n
      
      2가 한 개뿐이므로 [2]를 return 합니다.
    `,
  },
  {
    input: [1, 1, 1],
    answer: [-1],
    description: `
      [입출력 예 #3]\n\n
      
      2가 배열에 없으므로 [-1]을 return 합니다.
    `,
  },
  {
    input: [1, 2, 1, 2, 1, 10, 2, 1],
    answer: [2, 1, 2, 1, 10, 2],
    description: `
      [입출력 예 #4]\n\n
      
      2가 있는 인덱스는 1번, 3번, 6번 인덱스이므로 1번부터 6번 인덱스까지의 부분 배열인 [2, 1, 2, 1, 10, 2]를 return 합니다.
    `,
  },
];

describe("2의 영역", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
