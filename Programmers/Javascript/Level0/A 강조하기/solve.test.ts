import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'abstract algebra',
    answer: 'AbstrAct AlgebrA',
    description: `
      [입출력 예 #1]\n\n
      
      0번, 5번, 9번, 15번 인덱스의 'a'는 소문자이므로 전부 대문자로 고쳐줍니다.\n
      다른 문자들은 전부 'a'가 아닌 소문자이므로 바꾸지 않습니다.\n
      따라서 'AbstrAct AlgebrA'를 return 합니다.
    `,
  },
  {
    input: 'PrOgRaMmErS',
    answer: 'progrAmmers',
    description: `
      [입출력 예 #2]\n\n
      
      0번, 2번, 4번, 6번, 8번, 10번 인덱스의 문자들은 'A'가 아닌 대문자이므로 전부 소문자로 고쳐줍니다.\n
      5번 인덱스의 'a'는 소문자이므로 대문자로 고쳐줍니다.\n
      다른 문자들은 전부 'a'가 아닌 소문자이므로 바꾸지 않습니다.\n
      따라서 'progrAmmers'를 return 합니다.
    `,
  },
];

describe("A 강조하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
