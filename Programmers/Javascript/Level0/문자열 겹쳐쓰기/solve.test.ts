import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = [string, string, number];
type TestCaesAnswer = string;

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: ['He11oWor1d', 'lloWorl', 2],
    answer: 'HelloWorld',
    description: `
      [입출력 예 #1]\n\n
      
      예제 1번의 my_string에서 인덱스 2부터 overwrite_string의 길이만큼에 해당하는 부분은 '11oWor1'이고 이를 'lloWorl'로 바꾼 'HelloWorld'를 return 합니다.
    `,
  },
  {
    input: ['Program29b8UYP', 'merS123', 7],
    answer: 'ProgrammerS123',
    description: `
      [입출력 예 #2]\n\n
      
      예제 2번의 my_string에서 인덱스 7부터 overwrite_string의 길이만큼에 해당하는 부분은 '29b8UYP'이고 이를 'merS123'로 바꾼 'ProgrammerS123'를 return 합니다.
    `,
  },
];

describe("문자열 겹쳐쓰기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(...input)).toEqual(answer);
    });
  });
});
