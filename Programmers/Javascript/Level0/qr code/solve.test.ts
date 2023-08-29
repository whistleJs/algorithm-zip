import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [number, number, string];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [3, 1, 'qjnwezgrpirldywt'],
    answer: 'jerry',
    description: `
      [입출력 예 #1]\n\n
      
      q로 나눈 나머지가 1인 인덱스의 문자들을 앞에서부터 순서대로 이어 붙이면 'jerry'가 되므로 이를 return 합니다.
    `,
  },
  {
    input: [1, 0, 'programmers'],
    answer: 'programmers',
    description: `
      [입출력 예 #2]\n\n
      
      q로 나눈 나머지가 1인 인덱스의 문자들을 앞에서부터 순서대로 이어 붙이면 'programmers'가 되므로 이를 return 합니다.
    `,
  },
];

describe("qr code", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
