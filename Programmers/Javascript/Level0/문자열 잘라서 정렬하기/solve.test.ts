import { TestCase } from '@util/model';

import solution from './solve';

type TestCaseInput = string;
type TestCaesAnswer = string[];

const TEST_CASES: TestCase<TestCaseInput, TestCaesAnswer>[] = [
  {
    input: 'axbxcxdx',
    answer: ['a', 'b', 'c', 'd'],
    description: `
      [입출력 예 #1]\n\n
      
      myString을 'x'를 기준으로 자른 배열은 ['a', 'b', 'c', 'd']이며, 이 배열은 이미 사전순으로 정렬된 상태입니다. 따라서 해당 배열을 return 합니다.
    `,
  },
  {
    input: 'dxccxbbbxaaaa',
    answer: ['aaaa', 'bbb', 'cc', 'd'],
    description: `
      [입출력 예 #2]\n\n
      
      myString을 'x'를 기준으로 자른 배열은 ['d', 'cc', 'bbb', 'aaaa']이며, 이 배열을 사전순으로 정렬하면 ['aaaa', 'bbb', 'cc', 'd']입니다. 따라서 해당 배열을 return 합니다.
    `,
  },
];

describe("문자열 잘라서 정렬하기", () => {
  TEST_CASES.forEach(({ answer, description, input }) => {
    test(description, () => {
      expect(solution(input)).toEqual(answer);
    });
  });
});
