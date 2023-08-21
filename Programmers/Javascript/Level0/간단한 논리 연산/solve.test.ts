import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [boolean, boolean, boolean, boolean];
type TestCaesAnswer = boolean;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: [false, true, true, true],
    answer: true,
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 x1, x2, x3, x4로 식을 계산하면 다음과 같습니다.\n
      (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (F ∨ T) ∧ (T ∨ T) ≡ T ∧ T ≡ T\n\n

      따라서 true를 return 합니다.
    `,
  },
  {
    input: [true, false, false, false],
    answer: false,
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 x1, x2, x3, x4로 식을 계산하면 다음과 같습니다.\n
      (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (T ∨ F) ∧ (F ∨ F) ≡ T ∧ F ≡ F\n\n

      따라서 false를 return 합니다.
    `,
  },
];

describe("간단한 논리 연산", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
