import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['string', 3],
    answer: 'stringstringstring',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string은 'string'이고 이를 3번 반복한 문자열은 'stringstringstring'이므로 이를 return 합니다.
    `,
  },
  {
    input: ['love', 10],
    answer: 'lovelovelovelovelovelovelovelovelovelove',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.
    `,
  },
];

describe("문자열 곱하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
