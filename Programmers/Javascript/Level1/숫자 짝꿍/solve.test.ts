import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['100', '2345'],
    answer: '-1',
    description: `
      [입출력 예 #1]\n\n
      
      X, Y의 짝꿍은 존재하지 않습니다. 따라서 '-1'을 return합니다.
    `
  },
  {
    input: ['100', '203045'],
    answer: '0',
    description: `
      [입출력 예 #2]\n\n
      
      X, Y의 공통된 숫자는 0으로만 구성되어 있기 때문에, 두 수의 짝꿍은 정수 0입니다. 따라서 '0'을 return합니다.
    `
  },
  {
    input: ['100', '123450'],
    answer: '10',
    description: `
      [입출력 예 #3]\n\n
      
      X, Y의 짝꿍은 10이므로, '10'을 return합니다.
    `
  },
  {
    input: ['12321', '42531'],
    answer: '321',
    description: `
      [입출력 예 #4]\n\n
      
      X, Y의 짝꿍은 321입니다. 따라서 '321'을 return합니다.
    `
  },
  {
    input: ['5525', '1255'],
    answer: '552',
    description: `
      [입출력 예 #5]\n\n
      
      지문에 설명된 예시와 같습니다.
    `
  }
];

describe('숫자 짝꿍', () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
