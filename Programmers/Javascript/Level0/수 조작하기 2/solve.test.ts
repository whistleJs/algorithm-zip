import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = number[];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1],
    answer: 'wsdawsdassw',
    description: `
      [입출력 예 #1]\n\n
      
      result인 'wsdawsdassw'를 따라 log[0]에서부터 시작해 조작을 하면 log의 값과 순서대로 일치합니다. 따라서 'wsdawsdassw'를 return 합니다.
    `,
  },
];

describe("수 조작하기 2", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
