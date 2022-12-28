import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = number;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['3141592', '271'],
    answer: 2,
    description: `
      [입출력 예 #1]\n\n
      
      본문과 같습니다.
    `,
  },
  {
    input: ['500220839878', '7'],
    answer: 8,
    description: `
      [입출력 예 #2]\n\n
      
      p의 길이가 1이므로 t의 부분문자열은 '5', '0', 0', '2', '2', '0', '8', '3', '9', '8', '7', '8'이며,\n
      이중 7보다 작거나 같은 숫자는 '5', '0', '0', '2', '2', '0', '3', '7' 이렇게 8개가 있습니다.
    `,
  },
  {
    input: ['10203', '15'],
    answer: 3,
    description: `
      [입출력 예 #3]\n\n
      
      p의 길이가 2이므로 t의 부분문자열은 '10', '02', '20', '03'이며,\n
      이중 15보다 작거나 같은 숫자는 '10', '02', '03' 이렇게 3개입니다.\n
      '02'와 '03'은 각각 2, 3에 해당한다는 점에 주의하세요.
    `,
  },
];

describe('크기가 작은 부분 문자열', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
