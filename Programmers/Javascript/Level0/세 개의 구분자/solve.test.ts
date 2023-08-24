import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'baconlettucetomato',
    answer: ['onlettu', 'etom', 'to'],
    description: `
      [입출력 예 #1]\n\n
      
      문제 설명의 예시와 같습니다.
    `,
  },
  {
    input: 'abcd',
    answer: ['d'],
    description: `
      [입출력 예 #2]\n\n
      
      - 'c' 이전에는 'a', 'b', 'c' 이외의 문자가 없습니다.\n
      - 'c' 이후에 문자열 'd'가 있으므로 'd'를 저장합니다.\n
      - 따라서 ['d']를 return 합니다.
    `,
  },
  {
    input: 'cabab',
    answer: ['EMPTY'],
    description: `
      [입출력 예 #3]\n\n
      
      - 'a', 'b', 'c' 이외의 문자가 존재하지 않습니다. 따라서 저장할 문자열이 없습니다.\n
      - 따라서 ['EMPTY']를 return 합니다.
    `,
  },
];

describe("세 개의 구분자", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
