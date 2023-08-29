import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = null;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: null,
    answer: '!@#$%^&*(\\\'"<>?:;',
    description: `
      [입출력 예 #1]\n\n
      
      설명 없습니다.
    `,
  },
];

describe("특수문자 출력하기", () => {
  TEST_CASES.forEach(({ answer, description }) => {
    test(description, () => {
      expect(solution()).toEqual(answer);
    });
  });
});
